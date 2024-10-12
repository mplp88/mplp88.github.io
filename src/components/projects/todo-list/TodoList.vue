<script setup>
import Swal from 'sweetalert2'
import { ref, onMounted } from 'vue'

const nextId = ref(1)
const todoList = ref([])
const newTodoDescription = ref('')
const editingId = ref(0)
const maxLength = ref(50)
const wasValidated = ref(false)

// const swalBs = Swal.mixin({
//   customClass: {
//     confirmButton: 'btn btn-primary mx-3',
//     cancelButton: 'btn btn-danger mx-3'
//   },
//   buttonsStyling: false
// })

const swalBsDanger = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-danger mx-3',
    cancelButton: 'btn btn-primary mx-3'
  },
  buttonsStyling: false
})

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
  todoList.value.forEach((todo) => {
    if (todo.id == id) {
      todo.done = !todo.done
    }
  })
}

const deleteTodo = (id) => {
  if (editingId.value) {
    cancelEdition()
  }

  swalBsDanger
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
  console.log(tl)
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
    <div class="col-8 col-lg-6 offset-2 offset-lg-3">
      <form
        @submit.prevent="handleSubmit"
        class="card shadow mb-3 needs-validation"
        :class="{ 'was-validated': wasValidated }"
        novalidate
      >
        <div class="row my-3">
          <div class="offset-2 col-8">
            <label>{{ editingId ? 'Editar' : 'Nuevo' }}</label>
            <input
              id="new-todo-description"
              type="text"
              class="form-control"
              :maxlength="maxLength"
              v-model.trim="newTodoDescription"
              required
            />
            <small class="invalid-feedback">Campo obligatorio</small>
            <small>{{ newTodoDescription.length }} / {{ maxLength }}</small>
          </div>
        </div>
        <div class="row mb-3">
          <div class="offset-lg-3 offset-1 col-3">
            <button type="submit" class="btn btn-primary">Agregar</button>
          </div>
          <div v-if="editingId" class="col-3 offset-2 offset-lg-1">
            <button type="button" class="btn btn-danger" @click.prevent="cancelEdition">
              Cancelar
            </button>
          </div>
        </div>
      </form>
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
          <div class="col-lg-8 col-6" @click="markAsDone(item.id)">
            <div class="w-100 h-100 todo-description">
              <input type="checkbox" v-model="item.done" />
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
