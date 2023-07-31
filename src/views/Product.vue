<template>
  <section class="product bg-gray-100 min-h-[1500px]">
    <Container>
      <div class="w-full xl:px-5 max-w-[1150px] mx-auto py-10">
        <button
          class="flex items-center gap-4 px-4 py-1 text-[30px] mb-5 bg-white border-2 border-gray-300 rounded-lg overflow-hidden"
          @click="create"
        >
          <Icons name="add" color="#0D6EFD" />

          Add new product
        </button>

        <div class="grid xl:grid-cols-3 gap-5">
          <ProductCard v-for="(el, ind) in product" :key="ind" :el="el">
            <button
              class="p-1 rounded shadow-md absolute top-0 right-0"
              @click="remove(el.id)"
            >
              <Icons name="delete_outline" color="red"></Icons>
            </button>

            <button
              class="p-1 rounded shadow-md absolute top-0 left-0"
              @click="update(el.id)"
            >
              <Icons name="create" color="blue"></Icons>
            </button>
          </ProductCard>
        </div>
      </div>
    </Container>
  </section>

  <form @submit.prevent="submit" v-if="isShowModal">
    <Modal @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">
          {{ isEdit ? "Edit" : "New" }} Product
        </div>
      </template>
      <template #body>
        <div class="mb-6 px-5">
          <label
            for="newPrice"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Price
          </label>
          <input
            v-model="dataItem.newPrice"
            type="text"
            id="newPrice"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter newPrice"
            required
          />
        </div>

        <div class="mb-6 px-5">
          <label
            for="oldPrice"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Old Price
          </label>
          <input
            v-model="dataItem.oldPrice"
            type="text"
            id="oldPrice"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter oldPrice"
            required
          />
        </div>

        <div class="mb-6 px-5">
          <label
            for="rating"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Rating
          </label>
          <input
            v-model="dataItem.rating"
            type="text"
            id="rating"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter rating"
            required
          />
        </div>

        <div class="mb-6 px-5">
          <label
            for="orders"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Orders
          </label>
          <input
            v-model="dataItem.orders"
            type="text"
            id="orders"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter orders"
            required
          />
        </div>

        <div class="mb-6 px-5">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            v-model="dataItem.description"
            type="text"
            id="description"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter description"
            required
          />
        </div>
      </template>
      <template #footer>
        <div class="flex justify-between">
          <button
            @click="clear"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </template>
    </Modal>
  </form>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { ElMessageBox } from "element-plus";
import { Modal } from "flowbite-vue";
import { useProductStore } from "../stores/product";

const isShowModal = ref(false);
const isEdit = ref(false);
const editId = ref(null);

function closeModal() {
  isShowModal.value = false;
}

function showModal() {
  isShowModal.value = true;
}

const productStore = useProductStore();

const product = ref(productStore.getAll);

const dataItem = reactive({
  image: "mobile-image-9.png",
  newPrice: "$99.50",
  oldPrice: "$1128.00",
  rating: 1,
  orders: 154,
  description: "GoPro HERO6 4K Action Camera - Black",
});

const clear = () => {
  dataItem.image = null;
  dataItem.newPrice = null;
  dataItem.oldPrice = null;
  dataItem.rating = null;
  dataItem.orders = null;
  dataItem.description = null;

  closeModal();
};

const updateList = () => {
  product.value = productStore.getAll;
};

const submit = () => {
  const item = {
    image: dataItem.image,
    newPrice: dataItem.newPrice,
    oldPrice: dataItem.oldPrice,
    rating: dataItem.rating,
    orders: dataItem.orders,
    description: dataItem.description,
  };

  if (!isEdit.value) {
    productStore.create(item);
  } else {
    productStore.update(editId.value, item);
  }

  closeModal();

  updateList();
};

const create = () => {
  showModal();
};

const update = (id) => {
  const oneProduct = productStore.getOne(id);

  dataItem.image = oneProduct.image;
  dataItem.newPrice = oneProduct.newPrice;
  dataItem.oldPrice = oneProduct.oldPrice;
  dataItem.rating = oneProduct.rating;
  dataItem.orders = oneProduct.orders;
  dataItem.description = oneProduct.description;

  editId.value = id;
  isEdit.value = true;
  showModal();
};

const remove = (id) => {
  ElMessageBox.confirm(
    "This action will delete the Product. Continue?",
    "Warning",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning",
    }
  )
    .then(() => {
      productStore.remove(id);

      props.updateList();
    })
    .catch(() => {});
};

onMounted(() => {
  updateList();
});
</script>

<style lang="scss" scoped></style>
