import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const data = ref([
    {
      id: 1,
      image: "mobile-image-1.png",
      newPrice: "$99.50",
      oldPrice: "$1128.00",
      rating: 4,
      orders: 154,
      description: "GoPro HERO6 4K Action Camera - Black",
    },

    {
      id: 2,
      image: "mobile-image-2.png",
      newPrice: "$99.50",
      oldPrice: "$1128.00",
      rating: 4.5,
      orders: 154,
      description: "GoPro HERO6 4K Action Camera - Black",
    },

    {
      id: 3,
      image: "mobile-image-3.png",
      newPrice: "$99.50",
      oldPrice: "$1128.00",
      rating: 5,
      orders: 154,
      description: "GoPro HERO6 4K Action Camera - Black",
    },

    {
      id: 4,
      image: "mobile-image-4.png",
      newPrice: "$99.50",
      oldPrice: "$1128.00",
      rating: 3.5,
      orders: 154,
      description: "GoPro HERO6 4K Action Camera - Black",
    },
    {
      id: 5,
      image: "mobile-image-5.png",
      newPrice: "$99.50",
      oldPrice: "$1128.00",
      rating: 3,
      orders: 154,
      description: "GoPro HERO6 4K Action Camera - Black",
    },

    {
      id: 6,
      image: "mobile-image-6.png",
      newPrice: "$99.50",
      oldPrice: "$1128.00",
      rating: 2.5,
      orders: 154,
      description: "GoPro HERO6 4K Action Camera - Black",
    },

    {
      id: 7,
      image: "mobile-image-7.png",
      newPrice: "$99.50",
      oldPrice: "$1128.00",
      rating: 2,
      orders: 154,
      description: "GoPro HERO6 4K Action Camera - Black",
    },

    {
      id: 8,
      image: "mobile-image-8.png",
      newPrice: "$99.50",
      oldPrice: "$1128.00",
      rating: 1.5,
      orders: 154,
      description: "GoPro HERO6 4K Action Camera - Black",
    },

    {
      id: 9,
      image: "mobile-image-9.png",
      newPrice: "$99.50",
      oldPrice: "$1128.00",
      rating: 1,
      orders: 154,
      description: "GoPro HERO6 4K Action Camera - Black",
    },
  ]);

  const getAll = computed(() => data.value);

  const getOne = (id) => data.value.find((item) => item.id == id);

  function setList(list) {
    data.value = list;
  }

  function create(newItem) {
    data.value.push({ id: generateUniqueId(), ...newItem });
  }

  function update(id, updateItem) {
    data.value.forEach((item) => {
      if (item.id == id) {
        item.image = updateItem.image;
        item.newPrice = updateItem.newPrice;
        item.oldPrice = updateItem.oldPrice;
        item.rating = updateItem.rating;
        item.orders = updateItem.orders;
        item.description = updateItem.description;
      }
    });
  }

  function remove(id) {
    data.value.forEach((item, index) => {
      if (item.id == id) {
        data.value.splice(index, 1);
      }
    });
  }

  function generateUniqueId() {
    const allUniqueId = data.value.map((item) => item.id);
    let id = 1;
    while (true) {
      if (!allUniqueId.includes(id)) {
        break;
      }

      id++;
    }
    return id;
  }

  return { getAll, getOne, setList, create, update, remove };
});
