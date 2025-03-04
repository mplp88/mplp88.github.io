<script setup>
import SwalMixins from '@/components/shared/sweetalert/swalBs'
import { v4 as uuidv4 } from 'uuid'
import { Confetti } from '@/assets/confetti.min'
import { ref, onMounted, watch } from 'vue'

const currentList = ref(-1)
const lists = ref([
  {
    id: 123,
    description: 'Prueba2',
    items: []
  }
])
const todoList = ref({
  id: null,
  description: null,
  items: []
})
const newTodoDescription = ref('')
const editingId = ref(0)
const maxLength = ref(50)
const wasValidated = ref(false)

let confetti = ref({})

const handleSubmit = () => {
  if (currentList.value == -1) return

  wasValidated.value = true

  if (!newTodoDescription.value) {
    return
  }

  const newTodo = {
    id: uuidv4(),
    description: newTodoDescription.value,
    done: false
  }

  if (!editingId.value) {
    todoList.value.items.push(newTodo)
  } else {
    const todo = todoList.value.items.find((t) => t.id == editingId.value)
    todo.description = newTodoDescription.value
    editingId.value = 0
  }

  saveToLocalStorage()
  newTodoDescription.value = ''
  wasValidated.value = false
}

const markAsDone = (id) => {
  const todo = todoList.value.items.find((t) => t.id == id)
  todo.done = !todo.done

  if (!todoList.value.items.some((x) => !x.done)) {
    document.querySelector('#confetti').click()
    SwalMixins.alert
      .fire({
        title: 'Felicidades',
        text: 'Completó todos los elementos de la lista. ¿Desea eliminar la lista?',
        icon: 'success',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          lists.value = lists.value.filter((t) => t.id != currentList.value)
          currentList.value = lists.value[0]?.id || -1
          saveToLocalStorage()
        }
      })
  }

  saveToLocalStorage()
}

const deleteTodo = (id) => {
  if (editingId.value) {
    cancelEdition()
  }

  SwalMixins.danger
    .fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de eliminar este elemento',
      icon: 'warning',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true
    })
    .then((result) => {
      if (result.isConfirmed) {
        todoList.value.items = todoList.value.items.filter((t) => t.id != id)
        saveToLocalStorage()
      }
    })
}

const editTodo = (id) => {
  editingId.value = id
  const todo = todoList.value.items.find((t) => t.id == id)
  newTodoDescription.value = todo.description
  document.querySelector('#new-todo-description').focus()
}

const cancelEdition = () => {
  editingId.value = 0
  newTodoDescription.value = ''
}

const someDone = () => {
  return todoList.value.items.some((x) => x.done)
}

const isListEmpty = () => {
  return todoList.value.items.length == 0
}

const clearDone = () => {
  SwalMixins.danger
    .fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de eliminar todos elementos marcados como hechos',
      icon: 'warning',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true
    })
    .then((result) => {
      if (result.isConfirmed) {
        todoList.value.items = todoList.value.items.filter((x) => !x.done)
        saveToLocalStorage()
      }
    })
}

const clearAll = () => {
  SwalMixins.danger
    .fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de eliminar todos elementos de la lista',
      icon: 'warning',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true
    })
    .then((result) => {
      if (result.isConfirmed) {
        todoList.value.items = []
        saveToLocalStorage()
      }
    })
}

const newList = () => {
  SwalMixins.alert
    .fire({
      title: 'Crear nueva lista',
      text: 'Descripción de la lista',
      icon: 'question',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      input: 'text'
    })
    .then((result) => {
      if (result.isConfirmed && result.value) {
        const newList = {
          id: uuidv4(),
          description: result.value,
          items: []
        }

        lists.value.push(newList)
        currentList.value = newList.id
        todoList.value = newList
        saveToLocalStorage()
      }
    })
}

const deleteList = (listId) => {
  SwalMixins.danger
    .fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de eliminar la lista',
      icon: 'warning',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true
    })
    .then((result) => {
      if (result.isConfirmed) {
        lists.value = lists.value.filter((l) => l.id != listId)
        currentList.value = lists.value[0]?.id || -1
        saveToLocalStorage()
      }
    })
}

const saveToLocalStorage = () => {
  localStorage.setItem('lists', JSON.stringify(lists.value))
}

const getFromLocalStorage = () => {
  const _lists = JSON.parse(localStorage.getItem('lists'))
  if (_lists) {
    lists.value = _lists
  }
}

watch(currentList, () => {
  if (currentList.value == -1) {
    todoList.value = { id: null, description: null, items: [] }
  } else {
    todoList.value = lists.value.find((l) => l.id == currentList.value)
    document.querySelector('#new-todo-description').focus()
  }
})

onMounted(() => {
  console.log('mounted')
  getFromLocalStorage()
  if (lists.value.length) {
    currentList.value = lists.value[0].id
  } else {
    currentList.value = -1
  }

  confetti.value = new Confetti('confetti')
  confetti.value.setCount(75)
  confetti.value.setSize(1)
  confetti.value.setPower(25)
  confetti.value.setFade(true)
  confetti.value.destroyTarget(false)
})
</script>

<template>
  <a id="confetti" href="#" @click.prevent style="display: none">&nbsp;</a>
  <div class="row mt-3">
    <div class="col-10 col-lg-6 offset-1 offset-lg-3">
      <form
        @submit.prevent="handleSubmit"
        class="card shadow mb-3 p-1 needs-validation"
        :class="{ 'was-validated': wasValidated }"
        novalidate
      >
        <div class="row mb-1">
          <div class="col-10 offset-1 offset-lg-2 col-lg-8">
            <label>{{ editingId ? 'Editar' : 'Nuevo' }}</label>
            <div class="input-group has-validation">
              <input
                id="new-todo-description"
                type="text"
                class="form-control"
                :maxlength="maxLength"
                v-model.trim="newTodoDescription"
                required
                :disabled="currentList == -1"
              />
              <button
                type="submit"
                class="btn btn-primary"
                :class="{ disabled: currentList == -1 }"
              >
                <i class="fa-solid fa-check"></i>
              </button>
              <button
                type="button"
                class="btn btn-danger"
                v-if="editingId"
                @click.prevent="cancelEdition"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
              <small class="invalid-feedback">Campo obligatorio</small>
            </div>
            <small>{{ newTodoDescription.length }} / {{ maxLength }}</small>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-6 offset-6 col-lg-3 offset-lg-9 mr-1 text-end">
            <button
              type="button"
              class="btn btn-danger"
              :class="{ disabled: isListEmpty() }"
              @click="clearAll"
            >
              Limpiar lista
            </button>
          </div>
        </div>
        <div class="row mb-1">
          <div class="col-9 offset-3 col-lg-4 offset-lg-8 mr-1 text-end">
            <button
              type="button"
              class="btn btn-danger"
              :class="{ disabled: !someDone() }"
              @click="clearDone"
            >
              Eliminar completados
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="row mb-2">
      <div class="col-8 col-md-4">
        <select class="form-control" v-model="currentList">
          <option value="-1" v-if="lists.length == 0">No hay listas</option>
          <option value="-1" v-else>Seleccione una lista</option>
          <option v-for="list in lists" :key="list.id" :value="list.id">
            {{ list.description }}
          </option>
        </select>
      </div>
      <div class="col-1 offset-1 offset-md-6">
        <button
          class="btn btn-danger mr-3"
          @click="deleteList(currentList)"
          v-if="currentList != -1"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <div class="col-1 offset-1 offset-md-0">
        <button class="btn btn-primary mr-3" @click="newList">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
    <Transition enter-active-class="animate__animated animate__fadeIn">
      <div class="col-12 offset-lg-2 col-lg-8 text-center mt-3" v-if="currentList && isListEmpty()">
        <h3>{{ currentList != -1 ? 'La lista está vacía' : 'No hay una lista seleccionada' }}</h3>
      </div>
      <div class="col-12 offset-lg-2 col-lg-8" v-else>
        <div class="row">
          <div class="col-8">
            <strong>Descripción</strong>
          </div>
          <div class="col-4 text-end">
            <strong>Acciones</strong>
          </div>
        </div>
        <TransitionGroup enter-active-class="animate__animated animate__fadeInUp">
          <div class="row my-1" v-for="item in todoList.items" :key="item.id">
            <div class="col-1" @click="markAsDone(item.id)">
              <input class="d-none" type="checkbox" v-model="item.done" />
              <span v-if="item.done"><i class="fa-regular fa-square-check"></i></span>
              <span v-else><i class="fa-regular fa-square"></i></span>
            </div>
            <div class="col-lg-7 col-5" @click="markAsDone(item.id)">
              <div class="w-100 h-100 todo-description" :class="{ done: item.done }">
                {{ item.description }}
              </div>
            </div>
            <div class="col-lg-4 col-6 text-end">
              <button class="btn btn-primary" @click="editTodo(item.id)">
                <i class="fa-solid fa-pen"></i>
              </button>
              <button class="btn btn-danger" @click="deleteTodo(item.id)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </Transition>
  </div>
</template>
