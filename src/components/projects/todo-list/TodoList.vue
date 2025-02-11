<script setup>
import SwalMixins from '@/components/shared/sweetalert/swalBs'
import { ref, onMounted } from 'vue'

const nextId = ref(1)
const todoList = ref([])
const newTodoDescription = ref('')
const editingId = ref(0)
const maxLength = ref(50)
const wasValidated = ref(false)

const handleSubmit = () => {
  wasValidated.value = true

  if (!newTodoDescription.value) {
    return
  }

  const newTodo = {
    id: nextId.value,
    description: newTodoDescription.value,
    done: false
  }

  if (!editingId.value) {
    todoList.value.push(newTodo)
  } else {
    const todo = todoList.value.find((t) => t.id == editingId.value)
    todo.description = newTodoDescription.value
    editingId.value = 0
  }

  saveToLocalStorage()
  newTodoDescription.value = ''
  nextId.value++
  wasValidated.value = false
}

const markAsDone = (id) => {
  const todo = todoList.value.find((t) => t.id == id)
  todo.done = !todo.done
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
        todoList.value = todoList.value.filter((t) => t.id != id)
        saveToLocalStorage()
      }
    })
}

const editTodo = (id) => {
  editingId.value = id
  const todo = todoList.value.find((t) => t.id == id)
  newTodoDescription.value = todo.description
  document.querySelector('#new-todo-description').focus()
}

const cancelEdition = () => {
  editingId.value = 0
  newTodoDescription.value = ''
}

const saveToLocalStorage = () => {
  localStorage.setItem('todoList', JSON.stringify(todoList.value))
  localStorage.setItem('nextId', nextId.value.toString())
}

const getFromLocalStorage = () => {
  const tl = JSON.parse(localStorage.getItem('todoList'))
  const nId = JSON.parse(localStorage.getItem('nextId'))

  if (tl) {
    todoList.value = tl
  }

  if (nId) {
    nextId.value = nId
  }
}

onMounted(() => {
  getFromLocalStorage()
})
</script>

<template>
  <div class="row mt-3">
    <div class="col-10 col-lg-6 offset-1 offset-lg-3">
      <form
        @submit.prevent="handleSubmit"
        class="card shadow mb-3 needs-validation"
        :class="{ 'was-validated': wasValidated }"
        novalidate
      >
        <div class="row my-3">
          <div class="offset-2 col-8">
            <label>{{ editingId ? 'Editar' : 'Nuevo' }}</label>
            <div class="input-group has-validation">
              <input
                id="new-todo-description"
                type="text"
                class="form-control"
                :maxlength="maxLength"
                v-model.trim="newTodoDescription"
                required
              />
              <button type="submit" class="btn btn-primary">
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
      </form>
    </div>
    <div>
      <div class="row">
        <div class="col-8">
          <strong>Descripción</strong>
        </div>
        <div class="col-4 text-end">
          <strong>Acciones</strong>
        </div>
      </div>
      <TransitionGroup
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <div class="row my-1" v-for="item in todoList" :key="item.id">
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
  </div>
</template>
