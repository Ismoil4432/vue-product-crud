<template>
  <svg
    v-if="name == 'arrow_back'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'arrow_forward'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'chevron_left'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'chevron_right'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'expand_more'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.59 8.29498L12 12.875L7.41 8.29498L6 9.70498L12 15.705L18 9.70498L16.59 8.29498Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'expand_less'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8.29498L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29498Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'unfold_less'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.40991 18.59L8.82991 20L11.9999 16.83L15.1699 20L16.5799 18.59L11.9999 14L7.40991 18.59ZM16.5899 5.41L15.1699 4L11.9999 7.17L8.82991 4L7.40991 5.41L11.9999 10L16.5899 5.41Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'unfold_more'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'clear'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'add'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'remove'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 13H5V11H19V13Z" :fill="color || 'black'" />
  </svg>

  <svg
    v-else-if="name == 'check'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.79508 15.875L4.62508 11.705L3.20508 13.115L8.79508 18.705L20.7951 6.70498L19.3851 5.29498L8.79508 15.875Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'done_all'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.965 6.70498L16.555 5.29498L10.215 11.635L11.625 13.045L17.965 6.70498ZM22.205 5.29498L11.625 15.875L7.445 11.705L6.035 13.115L11.625 18.705L23.625 6.70498L22.205 5.29498ZM0.375 13.115L5.965 18.705L7.375 17.295L1.795 11.705L0.375 13.115Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'playlist_add'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 9H2.5V11H13.5V9ZM13.5 5H2.5V7H13.5V5ZM17.5 13V9H15.5V13H11.5V15H15.5V19H17.5V15H21.5V13H17.5ZM2.5 15H9.5V13H2.5V15Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'sort'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 18H9V16H3V18ZM3 6V8H21V6H3ZM3 13H15V11H3V13Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'filter_list'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'home'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'arrow_drop_down'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 9.5L12 14.5L17 9.5H7Z" :fill="color || 'black'" />
  </svg>

  <svg
    v-else-if="name == 'arrow_right'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.5 17L14.5 12L9.5 7V17Z" :fill="color || 'black'" />
  </svg>

  <svg
    v-else-if="name == 'filter_alt'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00506 6H17.0051L11.9951 12.3L7.00506 6ZM4.25506 5.61C6.27506 8.2 10.0051 13 10.0051 13V19C10.0051 19.55 10.4551 20 11.0051 20H13.0051C13.5551 20 14.0051 19.55 14.0051 19V13C14.0051 13 17.7251 8.2 19.7451 5.61C20.2551 4.95 19.7851 4 18.9551 4H5.04506C4.21506 4 3.74506 4.95 4.25506 5.61Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'more_vert'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'more_horiz'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'menu'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'backspace'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 3H7C6.31 3 5.77 3.35 5.41 3.88L0 12L5.41 20.11C5.77 20.64 6.31 21 7 21H22C23.1 21 24 20.1 24 19V5C24 3.9 23.1 3 22 3ZM22 19H7.07L2.4 12L7.06 5H22V19ZM10.41 17L14 13.41L17.59 17L19 15.59L15.41 12L19 8.41L17.59 7L14 10.59L10.41 7L9 8.41L12.59 12L9 15.59L10.41 17Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'send'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L22.5 12L1.51 3Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'delete_outline'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'create'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.99878 17.25V21H6.74878L17.8088 9.94L14.0588 6.19L2.99878 17.25ZM5.91878 19H4.99878V18.08L14.0588 9.02L14.9788 9.94L5.91878 19ZM20.7088 5.63L18.3688 3.29C18.1688 3.09 17.9188 3 17.6588 3C17.3988 3 17.1488 3.1 16.9588 3.29L15.1288 5.12L18.8788 8.87L20.7088 7.04C21.0988 6.65 21.0988 6.02 20.7088 5.63Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'settings'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.4323 12.98C19.4723 12.66 19.5023 12.34 19.5023 12C19.5023 11.66 19.4723 11.34 19.4323 11.02L21.5423 9.37C21.7323 9.22 21.7823 8.95 21.6623 8.73L19.6623 5.27C19.5723 5.11 19.4023 5.02 19.2223 5.02C19.1623 5.02 19.1023 5.03 19.0523 5.05L16.5623 6.05C16.0423 5.65 15.4823 5.32 14.8723 5.07L14.4923 2.42C14.4623 2.18 14.2523 2 14.0023 2H10.0023C9.75228 2 9.54228 2.18 9.51228 2.42L9.13228 5.07C8.52228 5.32 7.96228 5.66 7.44228 6.05L4.95228 5.05C4.89228 5.03 4.83228 5.02 4.77228 5.02C4.60228 5.02 4.43228 5.11 4.34228 5.27L2.34228 8.73C2.21228 8.95 2.27228 9.22 2.46228 9.37L4.57228 11.02C4.53228 11.34 4.50228 11.67 4.50228 12C4.50228 12.33 4.53228 12.66 4.57228 12.98L2.46228 14.63C2.27228 14.78 2.22228 15.05 2.34228 15.27L4.34228 18.73C4.43228 18.89 4.60228 18.98 4.78228 18.98C4.84228 18.98 4.90228 18.97 4.95228 18.95L7.44228 17.95C7.96228 18.35 8.52228 18.68 9.13228 18.93L9.51228 21.58C9.54228 21.82 9.75228 22 10.0023 22H14.0023C14.2523 22 14.4623 21.82 14.4923 21.58L14.8723 18.93C15.4823 18.68 16.0423 18.34 16.5623 17.95L19.0523 18.95C19.1123 18.97 19.1723 18.98 19.2323 18.98C19.4023 18.98 19.5723 18.89 19.6623 18.73L21.6623 15.27C21.7823 15.05 21.7323 14.78 21.5423 14.63L19.4323 12.98ZM17.4523 11.27C17.4923 11.58 17.5023 11.79 17.5023 12C17.5023 12.21 17.4823 12.43 17.4523 12.73L17.3123 13.86L18.2023 14.56L19.2823 15.4L18.5823 16.61L17.3123 16.1L16.2723 15.68L15.3723 16.36C14.9423 16.68 14.5323 16.92 14.1223 17.09L13.0623 17.52L12.9023 18.65L12.7023 20H11.3023L10.9523 17.52L9.89228 17.09C9.46228 16.91 9.06228 16.68 8.66228 16.38L7.75228 15.68L6.69228 16.11L5.42228 16.62L4.72228 15.41L5.80228 14.57L6.69228 13.87L6.55228 12.74C6.52228 12.43 6.50228 12.2 6.50228 12C6.50228 11.8 6.52228 11.57 6.55228 11.27L6.69228 10.14L5.80228 9.44L4.72228 8.6L5.42228 7.39L6.69228 7.9L7.73228 8.32L8.63228 7.64C9.06228 7.32 9.47228 7.08 9.88228 6.91L10.9423 6.48L11.1023 5.35L11.3023 4H12.6923L13.0423 6.48L14.1023 6.91C14.5323 7.09 14.9323 7.32 15.3323 7.62L16.2423 8.32L17.3023 7.89L18.5723 7.38L19.2723 8.59L18.2023 9.44L17.3123 10.14L17.4523 11.27ZM12.0023 8C9.79228 8 8.00228 9.79 8.00228 12C8.00228 14.21 9.79228 16 12.0023 16C14.2123 16 16.0023 14.21 16.0023 12C16.0023 9.79 14.2123 8 12.0023 8ZM12.0023 14C10.9023 14 10.0023 13.1 10.0023 12C10.0023 10.9 10.9023 10 12.0023 10C13.1023 10 14.0023 10.9 14.0023 12C14.0023 13.1 13.1023 14 12.0023 14Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'account_circle'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'person'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'person_add_alt'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 9V6H18V9H15V11H18V14H20V11H23V9H20ZM9 12C11.21 12 13 10.21 13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12ZM9 6C10.1 6 11 6.9 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6ZM15.39 14.56C13.71 13.7 11.53 13 9 13C6.47 13 4.29 13.7 2.61 14.56C1.61 15.07 1 16.1 1 17.22V20H17V17.22C17 16.1 16.39 15.07 15.39 14.56ZM15 18H3V17.22C3 16.84 3.2 16.5 3.52 16.34C4.71 15.73 6.63 15 9 15C11.37 15 13.29 15.73 14.48 16.34C14.8 16.5 15 16.84 15 17.22V18Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'people_alt'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.67 13.13C18.04 14.06 19 15.32 19 17V20H23V17C23 14.82 19.43 13.53 16.67 13.13Z"
      :fill="color || 'black'"
    />
    <path
      d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5 5.27 15 6.58 15 8C15 9.42 14.5 10.73 13.67 11.76C14.09 11.9 14.53 12 15 12Z"
      :fill="color || 'black'"
    />
    <path
      d="M9 12C11.21 12 13 10.21 13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12ZM9 6C10.1 6 11 6.9 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6Z"
      :fill="color || 'black'"
    />
    <path
      d="M9 13C6.33 13 1 14.34 1 17V20H17V17C17 14.34 11.67 13 9 13ZM15 18H3V17.01C3.2 16.29 6.3 15 9 15C11.7 15 14.8 16.29 15 17V18Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'add_box'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM11 17H13V13H17V11H13V7H11V11H7V13H11V17Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'add_circle_outline'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'add_circle'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'remove_circle'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H7V11H17V13Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'schedule'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'event'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM12 13H17V18H12V13Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'calendar_today'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'search'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'file_download'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'cached'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 8L15 12H18C18 15.31 15.31 18 12 18C10.99 18 10.03 17.75 9.2 17.3L7.74 18.76C8.97 19.54 10.43 20 12 20C16.42 20 20 16.42 20 12H23L19 8ZM6 12C6 8.69 8.69 6 12 6C13.01 6 13.97 6.25 14.8 6.7L16.26 5.24C15.03 4.46 13.57 4 12 4C7.58 4 4 7.58 4 12H1L5 16L9 12H6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'cloud_upload'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM8 13H10.55V16H13.45V13H16L12 9L8 13Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'upload'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16.5H15V10.5H19L12 3.5L5 10.5H9V16.5ZM12 6.33L14.17 8.5H13V14.5H11V8.5H9.83L12 6.33ZM5 18.5H19V20.5H5V18.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'favorite_border'"
    name="like"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 2.82501C14.76 2.82501 13.09 3.63501 12 4.91501C10.91 3.63501 9.24 2.82501 7.5 2.82501C4.42 2.82501 2 5.24501 2 8.32501C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32501C22 5.24501 19.58 2.82501 16.5 2.82501ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32501C4 6.32501 5.5 4.82501 7.5 4.82501C9.04 4.82501 10.54 5.81501 11.07 7.18501H12.94C13.46 5.81501 14.96 4.82501 16.5 4.82501C18.5 4.82501 20 6.32501 20 8.32501C20 11.215 16.86 14.065 12.1 18.375Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'favorite'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.175L10.55 19.855C5.4 15.185 2 12.105 2 8.32501C2 5.24501 4.42 2.82501 7.5 2.82501C9.24 2.82501 10.91 3.63501 12 4.91501C13.09 3.63501 14.76 2.82501 16.5 2.82501C19.58 2.82501 22 5.24501 22 8.32501C22 12.105 18.6 15.185 13.45 19.865L12 21.175Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'star_border'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 9.74L14.81 9.12L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77L18.18 21.5L16.55 14.47L22 9.74ZM12 15.9L8.24 18.17L9.24 13.89L5.92 11.01L10.3 10.63L12 6.6L13.71 10.64L18.09 11.02L14.77 13.9L15.77 18.18L12 15.9Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'star'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'star_half'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 9.74L14.81 9.12L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77L18.18 21.5L16.55 14.47L22 9.74ZM12 15.9V6.6L13.71 10.64L18.09 11.02L14.77 13.9L15.77 18.18L12 15.9Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'list'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.25 10.5C3.42 10.5 2.75 11.17 2.75 12C2.75 12.83 3.42 13.5 4.25 13.5C5.08 13.5 5.75 12.83 5.75 12C5.75 11.17 5.08 10.5 4.25 10.5ZM4.25 4.5C3.42 4.5 2.75 5.17 2.75 6C2.75 6.83 3.42 7.5 4.25 7.5C5.08 7.5 5.75 6.83 5.75 6C5.75 5.17 5.08 4.5 4.25 4.5ZM4.25 16.5C3.42 16.5 2.75 17.18 2.75 18C2.75 18.82 3.43 19.5 4.25 19.5C5.07 19.5 5.75 18.82 5.75 18C5.75 17.18 5.08 16.5 4.25 16.5ZM7.25 19H21.25V17H7.25V19ZM7.25 13H21.25V11H7.25V13ZM7.25 5V7H21.25V5H7.25Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'gridview'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 3H3V11H11V3Z" :fill="color || 'black'" />
    <path d="M11 13H3V21H11V13Z" :fill="color || 'black'" />
    <path d="M21 3H13V11H21V3Z" :fill="color || 'black'" />
    <path d="M21 13H13V21H21V13Z" :fill="color || 'black'" />
  </svg>

  <svg
    v-else-if="name == 'listview'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 8H3V4H21V8ZM21 10H3V14H21V10ZM21 16H3V20H21V16Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'play_circle_filled'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'pause'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" :fill="color || 'black'" />
  </svg>

  <svg
    v-else-if="name == 'play_circle'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM9.5 16.5L16.5 12L9.5 7.5V16.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'pause_circle_outline'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16H11V8H9V16ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 16H15V8H13V16Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'play_arrow'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 8.64L13.77 12L8.5 15.36V8.64ZM6.5 5V19L17.5 12L6.5 5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'textsms'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16ZM7 9H9V11H7V9ZM11 9H13V11H11V9ZM15 9H17V11H15V9Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'mark_email_unread'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 9.98V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19L2.01 7C2.01 5.9 2.9 5 4 5H14.1C14.04 5.32 14 5.66 14 6C14 6.34 14.04 6.68 14.1 7H4L12 12L15.67 9.71C16.14 10.14 16.69 10.47 17.3 10.69L12 14L4 9V19H20V10.9C20.74 10.75 21.42 10.42 22 9.98ZM16 6C16 7.66 17.34 9 19 9C20.66 9 22 7.66 22 6C22 4.34 20.66 3 19 3C17.34 3 16 4.34 16 6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'message'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H18V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'drafts'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.99 9.5C21.99 8.78 21.62 8.15 21.05 7.8L12 2.5L2.95 7.8C2.38 8.15 2 8.78 2 9.5V19.5C2 20.6 2.9 21.5 4 21.5H20C21.1 21.5 22 20.6 22 19.5L21.99 9.5ZM19.99 9.5V9.51L12 14.5L4 9.5L12 4.82L19.99 9.5ZM4 19.5V11.84L12 16.86L19.99 11.87L20 19.5H4Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'email'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'chat_bubble_outline'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'chat'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H14V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'mark_unread_chat_alt'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 17H4V5H14.1C14.02 4.61 13.92 3.89 14.1 3H4C2.9 3 2 3.9 2 5V23L6 19H20C21.1 19 22 18.1 22 17V7.98C21.42 8.42 20.74 8.75 20 8.9V17Z"
      :fill="color || 'black'"
    />
    <path
      d="M19 7C20.6569 7 22 5.65685 22 4C22 2.34315 20.6569 1 19 1C17.3431 1 16 2.34315 16 4C16 5.65685 17.3431 7 19 7Z"
      :fill="color || 'black'"
    />
    <path d="M14 13H6V15H14V13Z" :fill="color || 'black'" />
    <path d="M18 10H6V12H18V10Z" :fill="color || 'black'" />
    <path
      d="M6 9H18V8.9C16.79 8.65 15.75 7.95 15.03 7H6V9Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'comment'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.99 4C21.99 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22L21.99 4ZM20 4V17.17L18.83 16H4V4H20ZM6 12H18V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'call'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'sticky_note_2'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 5V14H14V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H15L21 15V5C21 3.9 20.1 3 19 3ZM12 14H7V12H12V14ZM17 10H7V8H17V10Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'description'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'add_card'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H3C1.89 3 1.01 3.89 1.01 5L1 17C1 18.11 1.89 19 3 19H13V17H3V11H21V5C21 3.89 20.11 3 19 3ZM19 7H3V5H19V7ZM23 16V18H20V21H18V18H15V16H18V13H20V16H23Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'credit_card'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'notifications_active'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.75C13.1 21.75 14 20.85 14 19.75H10C10 20.85 10.9 21.75 12 21.75ZM18 15.75V10.75C18 7.68 16.37 5.11 13.5 4.43V3.75C13.5 2.92 12.83 2.25 12 2.25C11.17 2.25 10.5 2.92 10.5 3.75V4.43C7.64003 5.11 6.00003 7.67 6.00003 10.75V15.75L4.00003 17.75V18.75H20V17.75L18 15.75ZM16 16.75H8.00003V10.75C8.00003 8.27 9.51003 6.25 12 6.25C14.49 6.25 16 8.27 16 10.75V16.75ZM7.58003 3.83L6.15003 2.4C3.75003 4.23 2.17003 7.05 2.03003 10.25H4.03003C4.18003 7.6 5.54003 5.28 7.58003 3.83ZM19.97 10.25H21.97C21.82 7.05 20.24 4.23 17.85 2.4L16.43 3.83C18.45 5.28 19.82 7.6 19.97 10.25Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'dashboard'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'grid_view'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'inbox'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V16H8.56C9.25 17.19 10.53 18 12.01 18C13.49 18 14.76 17.19 15.46 16H19V19ZM19 14H14.01C14.01 15.1 13.11 16 12.01 16C10.91 16 10.01 15.1 10.01 14H5V5H19V14Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'folder'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.17 6L11.17 8H20V18H4V6H9.17ZM10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'folder_open'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V8H20V18Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'folder_copy'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 19.5H20V21.5H3C1.9 21.5 1 20.6 1 19.5V6.5H3V19.5ZM23 6.5V15.5C23 16.6 22.1 17.5 21 17.5H7C5.9 17.5 5 16.6 5 15.5L5.01 4.5C5.01 3.4 5.9 2.5 7 2.5H12L14 4.5H21C22.1 4.5 23 5.4 23 6.5ZM7 15.5H21V6.5H13.17L11.17 4.5H7V15.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'create_new_folder'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6H12L10 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V8C22 6.89 21.11 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM12 14H14V16H16V14H18V12H16V10H14V12H12V14Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'content_paste'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM19 21H5V5H7V8H17V5H19V21Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'cloud_queue'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.79 3.79 10 6 10H6.71C7.37 7.69 9.48 6 12 6C15.04 6 17.5 8.46 17.5 11.5V12H19C20.66 12 22 13.34 22 15C22 16.66 20.66 18 19 18Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'cloud_off'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 14.07C24 11.43 21.95 9.28999 19.35 9.10999C18.67 5.65999 15.64 3.06999 12 3.06999C10.67 3.06999 9.43 3.42999 8.35 4.03999L9.84 5.52999C10.51 5.23999 11.23 5.06999 12 5.06999C15.04 5.06999 17.5 7.52999 17.5 10.57V11.07H19C20.66 11.07 22 12.41 22 14.07C22 15.06 21.52 15.92 20.79 16.47L22.2 17.88C23.29 16.96 24 15.61 24 14.07ZM4.41 2.92999L3 4.33999L5.77 7.10999H5.35C2.34 7.42999 0 9.97999 0 13.07C0 16.38 2.69 19.07 6 19.07H17.73L19.73 21.07L21.14 19.66L4.41 2.92999ZM6 17.07C3.79 17.07 2 15.28 2 13.07C2 10.86 3.79 9.06999 6 9.06999H7.73L15.73 17.07H6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'visibility_off'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5.97499C15.79 5.97499 19.17 8.10499 20.82 11.475C20.23 12.695 19.4 13.745 18.41 14.595L19.82 16.005C21.21 14.775 22.31 13.235 23 11.475C21.27 7.08499 17 3.97499 12 3.97499C10.73 3.97499 9.51 4.17499 8.36 4.54499L10.01 6.19499C10.66 6.06499 11.32 5.97499 12 5.97499ZM10.93 7.11499L13 9.18499C13.57 9.43499 14.03 9.89499 14.28 10.465L16.35 12.535C16.43 12.195 16.49 11.835 16.49 11.465C16.5 8.98499 14.48 6.97499 12 6.97499C11.63 6.97499 11.28 7.02499 10.93 7.11499ZM2.01 3.84499L4.69 6.52499C3.06 7.80499 1.77 9.50499 1 11.475C2.73 15.865 7 18.975 12 18.975C13.52 18.975 14.98 18.685 16.32 18.155L19.74 21.575L21.15 20.165L3.42 2.42499L2.01 3.84499ZM9.51 11.345L12.12 13.955C12.08 13.965 12.04 13.975 12 13.975C10.62 13.975 9.5 12.855 9.5 11.475C9.5 11.425 9.51 11.395 9.51 11.345ZM6.11 7.94499L7.86 9.69499C7.63 10.245 7.5 10.845 7.5 11.475C7.5 13.955 9.52 15.975 12 15.975C12.63 15.975 13.23 15.845 13.77 15.615L14.75 16.595C13.87 16.835 12.95 16.975 12 16.975C8.21 16.975 4.83 14.845 3.18 11.475C3.88 10.045 4.9 8.86499 6.11 7.94499Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'local_offer'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM13 20.01L4 11V4H11V3.99L20 12.99L13 20.01Z"
      :fill="color || 'black'"
    />
    <path
      d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'mark_unread_chat_alt'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 17H4V5H14.1C14.02 4.61 13.92 3.89 14.1 3H4C2.9 3 2 3.9 2 5V23L6 19H20C21.1 19 22 18.1 22 17V7.98C21.42 8.42 20.74 8.75 20 8.9V17Z"
      :fill="color || 'black'"
    />
    <path
      d="M19 7C20.6569 7 22 5.65685 22 4C22 2.34315 20.6569 1 19 1C17.3431 1 16 2.34315 16 4C16 5.65685 17.3431 7 19 7Z"
      :fill="color || 'black'"
    />
    <path d="M14 13H6V15H14V13Z" :fill="color || 'black'" />
    <path d="M18 10H6V12H18V10Z" :fill="color || 'black'" />
    <path
      d="M6 9H18V8.9C16.79 8.65 15.75 7.95 15.03 7H6V9Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'history'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 3C8.53 3 4.5 7.03 4.5 12H1.5L5.39 15.89L5.46 16.03L9.5 12H6.5C6.5 8.13 9.63 5 13.5 5C17.37 5 20.5 8.13 20.5 12C20.5 15.87 17.37 19 13.5 19C11.57 19 9.82 18.21 8.56 16.94L7.14 18.36C8.77 19.99 11.01 21 13.5 21C18.47 21 22.5 16.97 22.5 12C22.5 7.03 18.47 3 13.5 3ZM12.5 8V13L16.75 15.52L17.52 14.24L14 12.15V8H12.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'photo_camera'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.12 5L15.95 7H20V19H4V7H8.05L9.88 5H14.12ZM15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5H16.83L15 3ZM12 10C13.65 10 15 11.35 15 13C15 14.65 13.65 16 12 16C10.35 16 9 14.65 9 13C9 11.35 10.35 10 12 10ZM12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'photo'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'mic'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 14.5C13.66 14.5 15 13.16 15 11.5V5.5C15 3.84 13.66 2.5 12 2.5C10.34 2.5 9 3.84 9 5.5V11.5C9 13.16 10.34 14.5 12 14.5Z"
      :fill="color || 'black'"
    />
    <path
      d="M17 11.5C17 14.26 14.76 16.5 12 16.5C9.24 16.5 7 14.26 7 11.5H5C5 15.03 7.61 17.93 11 18.42V21.5H13V18.42C16.39 17.93 19 15.03 19 11.5H17Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'archive'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.54 5.23L19.15 3.55C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.84 3.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.02 20.83 5.57 20.54 5.23ZM6.24 5H17.76L18.57 5.97H5.44L6.24 5ZM5 19V8H19V19H5ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'flag'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.86 5.5L12.26 7.5H17.5V13.5H14.14L13.74 11.5H6.5V5.5H11.86ZM13.5 3.5H4.5V20.5H6.5V13.5H12.1L12.5 15.5H19.5V5.5H13.9L13.5 3.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'alarm'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.4994 8.095H10.9994V14.095L15.7494 16.945L16.4994 15.715L12.4994 13.345V8.095ZM17.3364 1.905L21.9434 5.75L20.6634 7.285L16.0534 3.442L17.3364 1.905ZM6.6624 1.905L7.9444 3.441L3.3364 7.285L2.0564 5.749L6.6624 1.905ZM11.9994 4.095C7.0294 4.095 2.9994 8.125 2.9994 13.095C2.9994 18.065 7.0294 22.095 11.9994 22.095C16.9694 22.095 20.9994 18.065 20.9994 13.095C20.9994 8.125 16.9694 4.095 11.9994 4.095ZM11.9994 20.095C8.1394 20.095 4.9994 16.955 4.9994 13.095C4.9994 9.235 8.1394 6.095 11.9994 6.095C15.8594 6.095 18.9994 9.235 18.9994 13.095C18.9994 16.955 15.8594 20.095 11.9994 20.095Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'fullscreen'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'map'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5 3L20.34 3.03L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.78 3.22 21 3.5 21L3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19.03 21 18.85 21 18.62V3.5C21 3.22 20.78 3 20.5 3ZM10 5.47L14 6.87V18.53L10 17.13V5.47ZM5 6.46L8 5.45V17.15L5 18.31V6.46ZM19 17.54L16 18.55V6.86L19 5.7V17.54Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'gps_fixed'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C6.83 3.52 3.52 6.83 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C17.17 20.48 20.48 17.17 20.94 13H23V11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'gps_not_fixed'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.94 11C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C6.83 3.52 3.52 6.83 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C17.17 20.48 20.48 17.17 20.94 13H23V11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'error'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'help'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'error_outline'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'help_outline'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'warning'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 21.5H23L12 2.5L1 21.5ZM13 18.5H11V16.5H13V18.5ZM13 14.5H11V10.5H13V14.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'live_help'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 1.5H5C3.89 1.5 3 2.4 3 3.5V17.5C3 18.6 3.89 19.5 5 19.5H9L12 22.5L15 19.5H19C20.1 19.5 21 18.6 21 17.5V3.5C21 2.4 20.1 1.5 19 1.5ZM19 17.5H14.17L12 19.67L9.83 17.5H5V3.5H19V17.5ZM11 14.5H13V16.5H11V14.5ZM12 6.5C13.1 6.5 14 7.4 14 8.5C14 10.5 11 10.25 11 13.5H13C13 11.25 16 11 16 8.5C16 6.29 14.21 4.5 12 4.5C9.79 4.5 8 6.29 8 8.5H10C10 7.4 10.9 6.5 12 6.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'dark_mode'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.37 5.51C9.19 6.15 9.1 6.82 9.1 7.5C9.1 11.58 12.42 14.9 16.5 14.9C17.18 14.9 17.85 14.81 18.49 14.63C17.45 17.19 14.93 19 12 19C8.14 19 5 15.86 5 12C5 9.07 6.81 6.55 9.37 5.51ZM12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.69 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'security'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'verified_user'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.41 11.59L6 13L10 17L18 9L16.59 7.58L10 14.17L7.41 11.59Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'poll'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'verified'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 11.99L20.56 9.2L20.9 5.51L17.29 4.69L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 11.99L3.44 14.78L3.1 18.48L6.71 19.3L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 11.99ZM19.05 13.47L18.49 14.12L18.57 14.97L18.75 16.92L16.01 17.54L15.57 18.28L14.58 19.96L12.8 19.19L12 18.85L11.21 19.19L9.43 19.96L8.44 18.29L8 17.55L5.26 16.93L5.44 14.97L5.52 14.12L4.96 13.47L3.67 12L4.96 10.52L5.52 9.87L5.43 9.01L5.25 7.07L7.99 6.45L8.43 5.71L9.42 4.03L11.2 4.8L12 5.14L12.79 4.8L14.57 4.03L15.56 5.71L16 6.45L18.74 7.07L18.56 9.02L18.48 9.87L19.04 10.52L20.33 11.99L19.05 13.47Z"
      :fill="color || 'black'"
    />
    <path
      d="M10.09 13.75L7.77 11.42L6.29 12.91L10.09 16.72L17.43 9.36L15.95 7.87L10.09 13.75Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'block'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.37 8.45 20 10.15 20 12C20 16.42 16.42 20 12 20Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'thumb_up'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22H18C18.83 22 19.54 21.5 19.84 20.78L22.86 13.73C22.95 13.5 23 13.26 23 13V11C23 9.9 22.1 9 21 9H14.69L15.64 4.43L15.67 4.11C15.67 3.7 15.5 3.32 15.23 3.05L14.17 2L7.58 8.59C7.22 8.95 7 9.45 7 10V20C7 21.1 7.9 22 9 22ZM9 10L13.34 5.66L12 11H21V13L18 20H9V10ZM1 10H5V22H1V10Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'thumb_down_off_alt'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 2H6C5.17 2 4.46 2.5 4.16 3.22L1.14 10.27C1.05 10.5 1 10.74 1 11V13C1 14.1 1.9 15 3 15H9.31L8.36 19.57L8.33 19.89C8.33 20.3 8.5 20.68 8.77 20.95L9.83 22L16.42 15.41C16.78 15.05 17 14.55 17 14V4C17 2.9 16.1 2 15 2ZM15 14L10.66 18.34L12 13H3V11L6 4H15V14ZM19 2H23V14H19V2Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'warning_amber'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5ZM13 16.5H11V18.5H13V16.5ZM13 10.5H11V14.5H13V10.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'g_translate'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 5H10.88L10 2H4C2.9 2 2 2.9 2 4V17C2 18.1 2.9 19 4 19H11L12 22H20C21.1 22 22 21.1 22 20V7C22 5.9 21.1 5 20 5ZM7.17 14.59C4.92 14.59 3.08 12.76 3.08 10.5C3.08 8.24 4.91 6.41 7.17 6.41C8.21 6.41 9.16 6.78 9.91 7.48L9.98 7.54L8.75 8.72L8.69 8.67C8.4 8.4 7.91 8.08 7.17 8.08C5.86 8.08 4.79 9.17 4.79 10.5C4.79 11.83 5.86 12.92 7.17 12.92C8.54 12.92 9.13 12.05 9.29 11.46H7.08V9.91H11.03L11.04 9.98C11.08 10.19 11.09 10.38 11.09 10.59C11.09 12.94 9.48 14.59 7.17 14.59ZM13.2 12.88C13.53 13.48 13.94 14.06 14.39 14.58L13.85 15.11L13.2 12.88ZM13.97 12.12H12.98L12.67 11.08H16.66C16.66 11.08 16.32 12.39 15.1 13.82C14.58 13.2 14.21 12.59 13.97 12.12ZM21 20C21 20.55 20.55 21 20 21H13L15 19L14.19 16.23L15.11 15.31L17.79 18L18.52 17.27L15.81 14.59C16.71 13.56 17.41 12.34 17.73 11.08H19V10.04H15.36V9H14.32V10.04H12.36L11.18 6H20C20.55 6 21 6.45 21 7V20Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'language'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'hourglass_empty'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5ZM12 11.5L8 7.5V4H16V7.5L12 11.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'link'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 7H13V9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM11 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15ZM8 11H16V13H8V11Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'notifications_none'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.75C13.1 21.75 14 20.85 14 19.75H10C10 20.85 10.9 21.75 12 21.75ZM18 15.75V10.75C18 7.68 16.37 5.11 13.5 4.43V3.75C13.5 2.92 12.83 2.25 12 2.25C11.17 2.25 10.5 2.92 10.5 3.75V4.43C7.64 5.11 6 7.67 6 10.75V15.75L4 17.75V18.75H20V17.75L18 15.75ZM16 16.75H8V10.75C8 8.27 9.51 6.25 12 6.25C14.49 6.25 16 8.27 16 10.75V16.75Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'not_listed_location'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.01 16C11.74 16 11.49 15.9 11.3 15.71C11.1 15.51 11.01 15.28 11.01 15C11 14.45 11.44 14.01 11.99 14C12 14 12 14 12.01 14C12.29 14 12.52 14.1 12.72 14.29C12.9 14.48 13 14.72 13 14.99C13 15.26 12.9 15.5 12.71 15.7C12.52 15.9 12.28 16 12.01 16ZM11.13 12.34C11.13 11.89 11.23 11.5 11.42 11.18C11.61 10.85 11.95 10.48 12.42 10.06C12.7 9.81 12.9 9.59 13.03 9.4C13.16 9.21 13.22 9 13.22 8.76C13.22 8.47 13.11 8.23 12.9 8.02C12.69 7.82 12.4 7.72 12.05 7.72C11.68 7.72 11.31 7.82 11.09 8.02C10.88 8.22 10.69 8.47 10.69 9H9C9 7.99 9.46 7.27 9.97 6.79C10.53 6.28 11.25 6 12 6C12.59 6 13.11 6.12 13.57 6.35C14.03 6.58 14.36 6.9 14.62 7.31C14.88 7.72 15 8.17 15 8.66C15 9.15 14.9 9.56 14.69 9.91C14.48 10.26 14.21 10.62 13.8 11C13.48 11.3 13.27 11.56 13.15 11.77C13.03 11.98 12.97 12.26 12.97 12.58V13H11.12V12.34H11.13ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'fmd_good'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'shopping_basket'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 9.48999H17.21L12.83 2.92999C12.64 2.64999 12.32 2.50999 12 2.50999C11.68 2.50999 11.36 2.64999 11.17 2.93999L6.79 9.48999H2C1.45 9.48999 1 9.93999 1 10.49C1 10.58 1.01 10.67 1.04 10.76L3.58 20.03C3.81 20.87 4.58 21.49 5.5 21.49H18.5C19.42 21.49 20.19 20.87 20.43 20.03L22.97 10.76L23 10.49C23 9.93999 22.55 9.48999 22 9.48999ZM12 5.28999L14.8 9.48999H9.2L12 5.28999ZM18.5 19.49L5.51 19.5L3.31 11.49H20.7L18.5 19.49ZM12 13.49C10.9 13.49 10 14.39 10 15.49C10 16.59 10.9 17.49 12 17.49C13.1 17.49 14 16.59 14 15.49C14 14.39 13.1 13.49 12 13.49Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'inventory_2'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 2H4C3 2 2 2.9 2 4V7.01C2 7.73 2.43 8.35 3 8.7V20C3 21.1 4.1 22 5 22H19C19.9 22 21 21.1 21 20V8.7C21.57 8.35 22 7.73 22 7.01V4C22 2.9 21 2 20 2ZM19 20H5V9H19V20ZM20 7H4V4H20V7Z"
      :fill="color || 'black'"
    />
    <path d="M15 12H9V14H15V12Z" :fill="color || 'black'" />
  </svg>

  <svg
    v-else-if="name == 'shopping_cart'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5463 13C17.2963 13 17.9563 12.59 18.2963 11.97L21.8763 5.48C22.2463 4.82 21.7663 4 21.0063 4H6.20634L5.26634 2H1.99634V4H3.99634L7.59634 11.59L6.24634 14.03C5.51634 15.37 6.47634 17 7.99634 17H19.9963V15H7.99634L9.09634 13H16.5463ZM7.15634 6H19.3063L16.5463 11H9.52634L7.15634 6ZM7.99634 18C6.89634 18 6.00634 18.9 6.00634 20C6.00634 21.1 6.89634 22 7.99634 22C9.09634 22 9.99634 21.1 9.99634 20C9.99634 18.9 9.09634 18 7.99634 18ZM17.9963 18C16.8963 18 16.0063 18.9 16.0063 20C16.0063 21.1 16.8963 22 17.9963 22C19.0963 22 19.9963 21.1 19.9963 20C19.9963 18.9 19.0963 18 17.9963 18Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'headphones'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3C7.03 3 3 7.03 3 12V19C3 20.1 3.9 21 5 21H9V13H5V12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12V13H15V21H19C20.1 21 21 20.1 21 19V12C21 7.03 16.97 3 12 3ZM7 15V19H5V15H7ZM19 19H17V15H19V19Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'shopping_bag'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'account_balance_wallet'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5 7.28V5C20.5 3.9 19.6 3 18.5 3H4.5C3.39 3 2.5 3.9 2.5 5V19C2.5 20.1 3.39 21 4.5 21H18.5C19.6 21 20.5 20.1 20.5 19V16.72C21.09 16.37 21.5 15.74 21.5 15V9C21.5 8.26 21.09 7.63 20.5 7.28ZM19.5 9V15H12.5V9H19.5ZM4.5 19V5H18.5V7H12.5C11.4 7 10.5 7.9 10.5 9V15C10.5 16.1 11.4 17 12.5 17H18.5V19H4.5Z"
      :fill="color || 'black'"
    />
    <path
      d="M15.5 13.5C16.3284 13.5 17 12.8284 17 12C17 11.1716 16.3284 10.5 15.5 10.5C14.6716 10.5 14 11.1716 14 12C14 12.8284 14.6716 13.5 15.5 13.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'phone_enabled'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.46 5C17.4 5.89 17.25 6.76 17.01 7.59L18.21 8.79C18.62 7.59 18.88 6.32 18.97 5H17.46ZM7.6 17.02C6.75 17.26 5.88 17.41 5 17.47V18.96C6.32 18.87 7.59 18.61 8.8 18.21L7.6 17.02ZM16.5 3H20C20.55 3 21 3.45 21 4C21 13.39 13.39 21 4 21C3.45 21 3 20.55 3 20V16.51C3 15.96 3.45 15.51 4 15.51C5.24 15.51 6.45 15.31 7.57 14.94C7.67 14.9 7.78 14.89 7.88 14.89C8.14 14.89 8.39 14.99 8.59 15.18L10.79 17.38C13.62 15.93 15.94 13.62 17.38 10.79L15.18 8.59C14.9 8.31 14.82 7.92 14.93 7.57C15.3 6.45 15.5 5.25 15.5 4C15.5 3.45 15.95 3 16.5 3Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'content_paste_search'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 5H6V8H16V5H18V10H20V5C20 3.9 19.1 3 18 3H13.82C13.4 1.84 12.3 1 11 1C9.7 1 8.6 1.84 8.18 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H9V19H4V5ZM11 3C11.55 3 12 3.45 12 4C12 4.55 11.55 5 11 5C10.45 5 10 4.55 10 4C10 3.45 10.45 3 11 3Z"
      :fill="color || 'black'"
    />
    <path
      d="M19.3 18.9C19.7 18.2 20 17.4 20 16.5C20 14 18 12 15.5 12C13 12 11 14 11 16.5C11 19 13 21 15.5 21C16.4 21 17.2 20.7 17.9 20.3L20.6 23L22 21.6L19.3 18.9ZM15.5 19C14.1 19 13 17.9 13 16.5C13 15.1 14.1 14 15.5 14C16.9 14 18 15.1 18 16.5C18 17.9 16.9 19 15.5 19Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'print'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 8H18V3H6V8H5C3.34 8 2 9.34 2 11V17H6V21H18V17H22V11C22 9.34 20.66 8 19 8ZM8 5H16V8H8V5ZM16 19H8V15H16V19ZM18 15V13H6V15H4V11C4 10.45 4.45 10 5 10H19C19.55 10 20 10.45 20 11V15H18Z"
      :fill="color || 'black'"
    />
    <path
      d="M18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5C17.4477 10.5 17 10.9477 17 11.5C17 12.0523 17.4477 12.5 18 12.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'desktop_mac'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10L8 21V22H16V21L14 18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 14H3V4H21V14Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'cloud_download'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'business'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'laptop_windows'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 18.5V17.5C21.1 17.5 21.99 16.6 21.99 15.5L22 5.5C22 4.4 21.1 3.5 20 3.5H4C2.9 3.5 2 4.4 2 5.5V15.5C2 16.6 2.9 17.5 4 17.5V18.5H0V20.5H24V18.5H20ZM4 5.5H20V15.5H4V5.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'headset_mic'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 14V18H17V14H19ZM7 14V18H6C5.45 18 5 17.55 5 17V14H7ZM12 1C7.03 1 3 5.03 3 10V17C3 18.66 4.34 20 6 20H9V12H5V10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10V12H15V20H19V21H12V23H18C19.66 23 21 21.66 21 20V10C21 5.03 16.97 1 12 1Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'store'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.36 9L18.96 12H5.04L5.64 9H18.36ZM20 4H4V6H20V4ZM20 7H4L3 12V14H4V20H14V14H18V20H20V14H21V12L20 7ZM6 18V14H12V18H6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'account_balance'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 11H5V18H7V11ZM13 11H11V18H13V11ZM21.5 20H2.5V22H21.5V20ZM19 11H17V18H19V11ZM12 4.26L17.21 7H6.79L12 4.26ZM12 2L2.5 7V9H21.5V7L12 2Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'vpn_key'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 19H16V15H13.32C12.18 17.42 9.72 19 7 19C3.14 19 0 15.86 0 12C0 8.14 3.14 5 7 5C9.72 5 12.17 6.58 13.32 9H24V15H22V19ZM18 17H20V13H22V11H11.94L11.71 10.33C11.01 8.34 9.11 7 7 7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17C9.11 17 11.01 15.66 11.71 13.67L11.94 13H18V17ZM7 15C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9C8.65 9 10 10.35 10 12C10 13.65 8.65 15 7 15ZM7 11C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13C7.55 13 8 12.55 8 12C8 11.45 7.55 11 7 11Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'lock_open'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 8.5H17V6.5C17 3.74 14.76 1.5 12 1.5C9.24 1.5 7 3.74 7 6.5H9C9 4.84 10.34 3.5 12 3.5C13.66 3.5 15 4.84 15 6.5V8.5H6C4.9 8.5 4 9.4 4 10.5V20.5C4 21.6 4.9 22.5 6 22.5H18C19.1 22.5 20 21.6 20 20.5V10.5C20 9.4 19.1 8.5 18 8.5ZM18 20.5H6V10.5H18V20.5ZM12 17.5C13.1 17.5 14 16.6 14 15.5C14 14.4 13.1 13.5 12 13.5C10.9 13.5 10 14.4 10 15.5C10 16.6 10.9 17.5 12 17.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'lock'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 8.5H17V6.5C17 3.74 14.76 1.5 12 1.5C9.24 1.5 7 3.74 7 6.5V8.5H6C4.9 8.5 4 9.4 4 10.5V20.5C4 21.6 4.9 22.5 6 22.5H18C19.1 22.5 20 21.6 20 20.5V10.5C20 9.4 19.1 8.5 18 8.5ZM9 6.5C9 4.84 10.34 3.5 12 3.5C13.66 3.5 15 4.84 15 6.5V8.5H9V6.5ZM18 20.5H6V10.5H18V20.5ZM12 17.5C13.1 17.5 14 16.6 14 15.5C14 14.4 13.1 13.5 12 13.5C10.9 13.5 10 14.4 10 15.5C10 16.6 10.9 17.5 12 17.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'task_alt'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 5.18L10.59 16.6L6.35 12.36L7.76 10.95L10.59 13.78L20.59 3.78L22 5.18ZM19.79 10.22C19.92 10.79 20 11.39 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C13.58 4 15.04 4.46 16.28 5.25L17.72 3.81C16.1 2.67 14.13 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 10.81 21.78 9.67 21.4 8.61L19.79 10.22Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'language'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'check_filled'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'facebook'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 2C3.79086 2 2 3.79086 2 6V26C2 28.2091 3.79086 30 6 30H15.8331V20.4209H12.5224V16.6878H15.8331V13.9349C15.8331 10.7398 17.8366 9 20.7642 9C22.1665 9 23.371 9.10204 23.7224 9.14739V12.4868L21.6924 12.4878C20.1006 12.4878 19.7926 13.2247 19.7926 14.3049V16.6888H23.589L23.0948 20.4219H19.7926V30H26C28.2091 30 30 28.2091 30 26V6C30 3.79086 28.2091 2 26 2H6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'twitter'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M31 6.84068C29.8966 7.32244 28.7097 7.64822 27.4647 7.79496C28.7359 7.04465 29.7119 5.8578 30.1712 4.44299C28.9825 5.13701 27.6644 5.64092 26.2628 5.91317C25.1397 4.73555 23.5403 4 21.7703 4C18.3709 4 15.6156 6.7124 15.6156 10.0588C15.6156 10.5332 15.67 10.9956 15.775 11.4395C10.6591 11.1866 6.12437 8.77416 3.08875 5.1084C2.55906 6.00361 2.25531 7.04465 2.25531 8.15489C2.25531 10.2563 3.34187 12.1114 4.99281 13.1976C3.98406 13.1662 3.03531 12.894 2.20563 12.4399C2.20469 12.4658 2.20469 12.4907 2.20469 12.5165C2.20469 15.4523 4.32625 17.9007 7.1425 18.4572C6.62594 18.5957 6.08219 18.6695 5.52063 18.6695C5.12406 18.6695 4.73875 18.6316 4.36281 18.5615C5.14563 20.9684 7.41906 22.7201 10.1125 22.769C8.00594 24.3942 5.35187 25.3624 2.46812 25.3624C1.97125 25.3624 1.48188 25.3337 1 25.2784C3.72344 26.9968 6.95875 28 10.435 28C21.7563 28 27.9466 18.7673 27.9466 10.7612C27.9466 10.4981 27.9409 10.237 27.9287 9.9767C29.1316 9.12301 30.175 8.05614 31 6.84068Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'linkedin'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M26.5647 26.5628H22.1153V19.6009C22.1153 17.9406 22.0872 15.805 19.8034 15.805C17.4888 15.805 17.1353 17.6144 17.1353 19.4819V26.5628H12.6906V12.2463H16.9563V14.2038H17.0172C17.6106 13.0778 19.0619 11.8909 21.2266 11.8909C25.7322 11.8909 26.5647 14.8553 26.5647 18.7113V26.5628ZM7.67406 10.2906C6.24438 10.2906 5.09219 9.13469 5.09219 7.70969C5.09219 6.28562 6.24438 5.12969 7.67406 5.12969C9.09719 5.12969 10.2531 6.28562 10.2531 7.70969C10.2531 9.13469 9.09719 10.2906 7.67406 10.2906ZM9.89969 26.5628H5.44562V12.2463H9.89969V26.5628ZM29.7503 1H2.25063C1.55969 1 1 1.55969 1 2.24969V29.7494C1 30.4403 1.55969 31 2.25063 31H29.7503C30.4403 31 31 30.4403 31 29.7494V2.24969C31 1.55969 30.4403 1 29.7503 1Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'instagram'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16 1C11.9262 1 11.4163 1.0175 9.81625 1.09C4.36875 1.34 1.34125 4.3625 1.09125 9.815C1.0175 11.4163 1 11.9262 1 16C1 20.0737 1.0175 20.585 1.09 22.185C1.34 27.6325 4.3625 30.66 9.815 30.91C11.4163 30.9825 11.9262 31 16 31C20.0737 31 20.585 30.9825 22.185 30.91C27.6275 30.66 30.6625 27.6375 30.9088 22.185C30.9825 20.585 31 20.0737 31 16C31 11.9262 30.9825 11.4163 30.91 9.81625C30.665 4.37375 27.6388 1.34125 22.1862 1.09125C20.585 1.0175 20.0737 1 16 1ZM16 8.29744C11.7463 8.29744 8.29751 11.7462 8.29751 15.9999C8.29751 20.2537 11.7463 23.7037 16 23.7037C20.2538 23.7037 23.7025 20.2549 23.7025 15.9999C23.7025 11.7462 20.2538 8.29744 16 8.29744ZM16 21C13.2388 21 11 18.7625 11 16C11 13.2387 13.2388 11 16 11C18.7613 11 21 13.2387 21 16C21 18.7625 18.7613 21 16 21ZM24.0075 6.19379C23.0125 6.19379 22.2062 7.00004 22.2062 7.99379C22.2062 8.98754 23.0125 9.79379 24.0075 9.79379C25.0012 9.79379 25.8062 8.98754 25.8062 7.99379C25.8062 7.00004 25.0012 6.19379 24.0075 6.19379Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'whatsapp'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.28515 26.2412L9.73811 26.5094C11.6451 27.6353 13.8298 28.2306 16.057 28.2316H16.0626C22.9051 28.2316 28.4753 22.6881 28.4781 15.8753C28.479 12.5744 27.1889 9.46937 24.845 7.13406C22.5011 4.79875 19.3831 3.51156 16.0673 3.51062C9.21923 3.51062 3.64997 9.05313 3.64714 15.8659C3.6462 18.2003 4.30257 20.4737 5.54563 22.4416L5.84038 22.9084L4.58603 27.4684L9.28515 26.2412ZM1 31L3.11884 23.2966C1.81175 21.0419 1.12431 18.4844 1.12525 15.865C1.12807 7.66844 7.82927 1 16.0626 1C20.0583 1.00094 23.8091 2.54969 26.6286 5.35938C29.449 8.16906 31.0009 11.9041 31 15.8763C30.9962 24.0728 24.295 30.7422 16.0626 30.7422H16.056C13.5567 30.7412 11.0998 30.1169 8.91788 28.9328L1 31ZM12.0304 9.227C11.7084 8.454 11.3824 8.559 11.1384 8.547C10.9074 8.535 10.6434 8.533 10.3794 8.533C10.1144 8.533 9.6854 8.632 9.3224 9.029C8.9594 9.425 7.9354 10.384 7.9354 12.334C7.9354 14.284 9.3554 16.168 9.5534 16.433C9.7514 16.697 12.3484 20.699 16.3234 22.415C17.2694 22.823 18.0074 23.067 18.5834 23.25C19.5324 23.551 20.3964 23.509 21.0794 23.407C21.8414 23.293 23.4244 22.448 23.7544 21.523C24.0854 20.597 24.0854 19.804 23.9864 19.639C23.8874 19.474 23.6224 19.374 23.2264 19.176C22.8304 18.978 20.8814 18.019 20.5184 17.887C20.1544 17.755 19.8904 17.689 19.6264 18.085C19.3624 18.482 18.6024 19.374 18.3714 19.639C18.1404 19.903 17.9094 19.936 17.5124 19.738C17.1164 19.54 15.8394 19.121 14.3254 17.771C13.1474 16.721 12.3524 15.423 12.1204 15.027C11.8894 14.63 12.0964 14.416 12.2944 14.218C12.4724 14.041 12.6914 13.755 12.8894 13.524C13.0874 13.293 13.1534 13.127 13.2854 12.863C13.4174 12.598 13.3514 12.367 13.2524 12.169C13.1534 11.97 12.3604 10.02 12.0304 9.227Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'youtube'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.9025 20.3726L12.9016 11.9836L21.0072 16.1926L12.9025 20.3726ZM30.7 10.5299C30.7 10.5299 30.4066 8.47256 29.5075 7.56658C28.3666 6.37695 27.0878 6.37135 26.5019 6.30231C22.3037 6 16.0066 6 16.0066 6H15.9934C15.9934 6 9.69625 6 5.49813 6.30231C4.91125 6.37135 3.63344 6.37695 2.49156 7.56658C1.5925 8.47256 1.3 10.5299 1.3 10.5299C1.3 10.5299 1 12.9465 1 15.3622V17.6276C1 20.0442 1.3 22.4598 1.3 22.4598C1.3 22.4598 1.5925 24.5172 2.49156 25.4232C3.63344 26.6128 5.1325 26.5755 5.8 26.6996C8.2 26.9291 16 27 16 27C16 27 22.3037 26.9907 26.5019 26.6884C27.0878 26.6184 28.3666 26.6128 29.5075 25.4232C30.4066 24.5172 30.7 22.4598 30.7 22.4598C30.7 22.4598 31 20.0442 31 17.6276V15.3622C31 12.9465 30.7 10.5299 30.7 10.5299Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'facebook_2'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.8953 10.99L18.4834 10.9909C17.3762 10.9909 17.1616 11.5169 17.1616 12.2884V13.9909H19.8025L19.4584 16.6581H17.1616V23.5H14.4081V16.6581H12.1056V13.9909H14.4081V12.025C14.4081 9.74219 15.8022 8.5 17.8375 8.5C18.8125 8.5 19.6506 8.57219 19.8953 8.605V10.99ZM1 31H31V1H1V31Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'twitter_2'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.9644 12.9409C21.97 13.0731 21.9738 13.2053 21.9738 13.3394C21.9738 17.4053 18.8781 22.0947 13.2175 22.0947C11.4794 22.0947 9.86219 21.5856 8.5 20.7128C8.74094 20.7409 8.98562 20.755 9.23406 20.755C10.6759 20.755 12.0025 20.2638 13.0562 19.4378C11.7091 19.4134 10.5728 18.5238 10.1809 17.3013C10.3694 17.3369 10.5616 17.3556 10.7603 17.3556C11.0406 17.3556 11.3125 17.3181 11.5712 17.2478C10.1631 16.9656 9.10281 15.7216 9.10281 14.2309C9.10281 14.2178 9.10281 14.2047 9.10281 14.1916C9.51719 14.4222 9.9925 14.5609 10.4969 14.5769C9.67094 14.0247 9.12719 13.0825 9.12719 12.0156C9.12719 11.4513 9.27906 10.9225 9.54437 10.4678C11.0622 12.3297 13.33 13.555 15.8875 13.6834C15.835 13.4584 15.8078 13.2231 15.8078 12.9822C15.8078 11.2825 17.1859 9.90438 18.8847 9.90438C19.7706 9.90438 20.5703 10.2784 21.1309 10.8766C21.8322 10.7388 22.4912 10.4828 23.0856 10.1303C22.8559 10.8484 22.3675 11.4513 21.7328 11.8328C22.3553 11.7578 22.9478 11.5928 23.5 11.3481C23.0875 11.965 22.5653 12.5069 21.9644 12.9409ZM1 31H31V1H1V31Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'linkedin_2'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.5 23.4859H20.3922V18.6222C20.3922 17.4625 20.3716 15.9709 18.7769 15.9709C17.1597 15.9709 16.9131 17.2347 16.9131 18.5397V23.4859H13.8081V13.4847H16.7875V14.8525H16.8306C17.245 14.0659 18.2594 13.2362 19.7716 13.2362C22.9187 13.2362 23.5 15.3072 23.5 18.0006V23.4859ZM10.3038 12.1187C9.30531 12.1187 8.5 11.3106 8.5 10.3159C8.5 9.32125 9.30531 8.51312 10.3038 8.51312C11.2975 8.51312 12.1047 9.32125 12.1047 10.3159C12.1047 11.3106 11.2975 12.1187 10.3038 12.1187ZM11.8581 23.4859H8.74656V13.4847H11.8581V23.4859ZM1 31H31V1H1V31Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'instagram_2'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.5804 16.0171C20.5804 18.5268 18.5339 20.5696 16.0176 20.5696C13.5014 20.5696 11.4548 18.5268 11.4548 16.0171C11.4548 15.6008 11.5111 15.1967 11.617 14.8133H10.2136V21.3364C10.2136 21.568 10.4011 21.7555 10.6326 21.7555H21.4017C21.6342 21.7555 21.8217 21.568 21.8217 21.3364V14.8133H20.4183C20.5242 15.1967 20.5804 15.6008 20.5804 16.0171ZM19.3392 13.0694H21.367C21.5986 13.0694 21.787 12.8819 21.787 12.6512V10.6272C21.787 10.3966 21.5986 10.2091 21.367 10.2091H19.3392C19.1076 10.2091 18.9192 10.3966 18.9192 10.6272V12.6512C18.9192 12.8819 19.1076 13.0694 19.3392 13.0694ZM16.0175 18.8948C17.6103 18.8948 18.9022 17.6067 18.9022 16.0167C18.9022 14.4276 17.6103 13.1395 16.0175 13.1395C14.4247 13.1395 13.1328 14.4276 13.1328 16.0167C13.1328 17.6067 14.4247 18.8948 16.0175 18.8948ZM23.5 21.7206C23.5 22.7031 22.7022 23.5 21.7169 23.5H10.2831C9.29875 23.5 8.5 22.7031 8.5 21.7206V10.2784C8.5 9.29594 9.29875 8.5 10.2831 8.5H21.7169C22.7022 8.5 23.5 9.29594 23.5 10.2784V21.7206ZM1 31H31V1H1V31Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'whatsapp_2'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.6683 18.5884C19.5137 19.0225 18.7712 19.4181 18.414 19.4716C18.0943 19.5194 17.6893 19.5391 17.244 19.3984C16.974 19.3122 16.628 19.1978 16.1855 19.0066C14.3218 18.2022 13.104 16.3263 13.0112 16.2025C12.9183 16.0788 12.2527 15.1956 12.2527 14.2816C12.2527 13.3675 12.7327 12.9175 12.9033 12.7319C13.073 12.5463 13.2746 12.4994 13.3983 12.4994C13.5221 12.4994 13.6458 12.5003 13.7546 12.5059C13.869 12.5116 14.0218 12.4628 14.1727 12.8247C14.3274 13.1969 14.6987 14.1109 14.7455 14.2038C14.7915 14.2966 14.8224 14.4053 14.7605 14.5291C14.6987 14.6528 14.6677 14.7306 14.5749 14.8394C14.4821 14.9472 14.3799 15.0813 14.2965 15.1647C14.2037 15.2566 14.1062 15.3578 14.2149 15.5434C14.3237 15.7291 14.6958 16.3375 15.248 16.8297C15.9577 17.4625 16.5568 17.6584 16.7424 17.7522C16.928 17.845 17.0368 17.8291 17.1446 17.7053C17.2533 17.5816 17.6096 17.1634 17.7333 16.9769C17.8571 16.7913 17.9808 16.8222 18.1515 16.8841C18.3212 16.9459 19.2352 17.395 19.4208 17.4888C19.6065 17.5816 19.7302 17.6275 19.7771 17.7053C19.823 17.7831 19.823 18.1544 19.6683 18.5884ZM16.0337 9.75531C12.6249 9.75531 9.85178 12.5266 9.85084 15.9325C9.85084 17.0997 10.1771 18.2369 10.7958 19.2203L10.943 19.4538L10.3187 21.7337L12.6577 21.1206L12.8827 21.2537C13.8315 21.8172 14.919 22.1153 16.028 22.1153H16.0308C19.4368 22.1153 22.209 19.3441 22.2108 15.9372C22.2108 14.2863 21.5696 12.7347 20.4024 11.5666C19.2352 10.3994 17.6837 9.75531 16.0337 9.75531ZM16.0309 23.3706H16.0281C14.7831 23.3706 13.5606 23.0584 12.475 22.4659L8.53281 23.5L9.58844 19.6478C8.93781 18.5209 8.59469 17.2422 8.59562 15.9316C8.5975 11.8337 11.9322 8.5 16.0309 8.5C18.0194 8.5 19.8869 9.27437 21.2903 10.6797C22.6938 12.0841 23.4672 13.9516 23.4662 15.9381C23.4644 20.0359 20.1287 23.3706 16.0309 23.3706ZM1 31H31V1H1V31Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'youtube_2'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.4514 17.9452L18.5042 15.8452L14.4505 13.7302L14.4514 17.9452ZM23.5 16.5662C23.5 17.7803 23.35 18.9944 23.35 18.9944C23.35 18.9944 23.2038 20.0275 22.7537 20.4831C22.1838 21.0803 21.5444 21.0831 21.2509 21.1178C19.1519 21.2697 16 21.2744 16 21.2744C16 21.2744 12.1 21.2388 10.9 21.1244C10.5662 21.0616 9.81625 21.0803 9.24625 20.4831C8.79625 20.0275 8.65 18.9944 8.65 18.9944C8.65 18.9944 8.5 17.7803 8.5 16.5662V15.4281C8.5 14.2141 8.65 13.0009 8.65 13.0009C8.65 13.0009 8.79625 11.9669 9.24625 11.5113C9.81625 10.9141 10.4556 10.9113 10.7491 10.8766C12.8481 10.7247 15.9972 10.7247 15.9972 10.7247H16.0028C16.0028 10.7247 19.1519 10.7247 21.2509 10.8766C21.5444 10.9113 22.1838 10.9141 22.7537 11.5113C23.2038 11.9669 23.35 13.0009 23.35 13.0009C23.35 13.0009 23.5 14.2141 23.5 15.4281V16.5662ZM1 31H31V1H1V31Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'facebook_3'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.8953 10.99L18.4834 10.9909C17.3762 10.9909 17.1616 11.5169 17.1616 12.2884V13.9909H19.8025L19.4584 16.6581H17.1616V23.5H14.4081V16.6581H12.1056V13.9909H14.4081V12.025C14.4081 9.74219 15.8022 8.5 17.8375 8.5C18.8125 8.5 19.6506 8.57219 19.8953 8.605V10.99ZM16 1C7.71625 1 1 7.71531 1 16C1 24.2837 7.71625 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'twitter_3'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.9644 12.9409C21.97 13.0731 21.9738 13.2053 21.9738 13.3394C21.9738 17.4053 18.8781 22.0947 13.2175 22.0947C11.4794 22.0947 9.86219 21.5856 8.5 20.7128C8.74094 20.7409 8.98562 20.755 9.23406 20.755C10.6759 20.755 12.0025 20.2638 13.0562 19.4378C11.7091 19.4134 10.5728 18.5238 10.1809 17.3013C10.3694 17.3369 10.5616 17.3556 10.7603 17.3556C11.0406 17.3556 11.3125 17.3181 11.5712 17.2478C10.1631 16.9656 9.10281 15.7216 9.10281 14.2309C9.10281 14.2178 9.10281 14.2047 9.10281 14.1916C9.51719 14.4222 9.9925 14.5609 10.4969 14.5769C9.67094 14.0247 9.12719 13.0825 9.12719 12.0156C9.12719 11.4513 9.27906 10.9225 9.54437 10.4678C11.0622 12.3297 13.33 13.555 15.8875 13.6834C15.835 13.4584 15.8078 13.2231 15.8078 12.9822C15.8078 11.2825 17.1859 9.90438 18.8847 9.90438C19.7706 9.90438 20.5703 10.2784 21.1309 10.8766C21.8322 10.7388 22.4912 10.4828 23.0856 10.1303C22.8559 10.8484 22.3675 11.4513 21.7328 11.8328C22.3553 11.7578 22.9478 11.5928 23.5 11.3481C23.0875 11.965 22.5653 12.5069 21.9644 12.9409ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'linkedin_3'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.5 23.4859H20.3922V18.6222C20.3922 17.4625 20.3716 15.9709 18.7769 15.9709C17.1597 15.9709 16.9131 17.2347 16.9131 18.5397V23.4859H13.8081V13.4847H16.7875V14.8525H16.8306C17.245 14.0659 18.2594 13.2362 19.7716 13.2362C22.9187 13.2362 23.5 15.3072 23.5 18.0006V23.4859ZM10.3038 12.1187C9.30531 12.1187 8.5 11.3106 8.5 10.3159C8.5 9.32125 9.30531 8.51312 10.3038 8.51312C11.2975 8.51312 12.1047 9.32125 12.1047 10.3159C12.1047 11.3106 11.2975 12.1187 10.3038 12.1187ZM11.8581 23.4859H8.74656V13.4847H11.8581V23.4859ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'instagram_3'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.0175 18.8948C17.6103 18.8948 18.9022 17.6067 18.9022 16.0167C18.9022 14.4276 17.6103 13.1395 16.0175 13.1395C14.4247 13.1395 13.1328 14.4276 13.1328 16.0167C13.1328 17.6067 14.4247 18.8948 16.0175 18.8948ZM19.3392 13.0694H21.367C21.5986 13.0694 21.787 12.8819 21.787 12.6512V10.6272C21.787 10.3966 21.5986 10.2091 21.367 10.2091H19.3392C19.1076 10.2091 18.9192 10.3966 18.9192 10.6272V12.6512C18.9192 12.8819 19.1076 13.0694 19.3392 13.0694ZM23.5 21.7206C23.5 22.7031 22.7022 23.5 21.7169 23.5H10.2831C9.29875 23.5 8.5 22.7031 8.5 21.7206V10.2784C8.5 9.29594 9.29875 8.5 10.2831 8.5H21.7169C22.7022 8.5 23.5 9.29594 23.5 10.2784V21.7206ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1ZM20.5804 16.0171C20.5804 18.5268 18.5339 20.5696 16.0176 20.5696C13.5014 20.5696 11.4548 18.5268 11.4548 16.0171C11.4548 15.6008 11.5111 15.1967 11.617 14.8133H10.2136V21.3364C10.2136 21.568 10.4011 21.7555 10.6326 21.7555H21.4017C21.6342 21.7555 21.8217 21.568 21.8217 21.3364V14.8133H20.4183C20.5242 15.1967 20.5804 15.6008 20.5804 16.0171Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'whatsapp_3'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.6683 18.5884C19.5137 19.0225 18.7712 19.4181 18.414 19.4716C18.0943 19.5194 17.6893 19.5391 17.244 19.3984C16.974 19.3122 16.628 19.1978 16.1855 19.0066C14.3218 18.2022 13.104 16.3263 13.0112 16.2025C12.9183 16.0788 12.2527 15.1956 12.2527 14.2816C12.2527 13.3675 12.7327 12.9175 12.9033 12.7319C13.073 12.5463 13.2746 12.4994 13.3983 12.4994C13.5221 12.4994 13.6458 12.5003 13.7546 12.5059C13.869 12.5116 14.0218 12.4628 14.1727 12.8247C14.3274 13.1969 14.6987 14.1109 14.7455 14.2038C14.7915 14.2966 14.8224 14.4053 14.7605 14.5291C14.6987 14.6528 14.6677 14.7306 14.5749 14.8394C14.4821 14.9472 14.3799 15.0813 14.2965 15.1647C14.2037 15.2566 14.1062 15.3578 14.2149 15.5434C14.3237 15.7291 14.6958 16.3375 15.248 16.8297C15.9577 17.4625 16.5568 17.6584 16.7424 17.7522C16.928 17.845 17.0368 17.8291 17.1446 17.7053C17.2533 17.5816 17.6096 17.1634 17.7333 16.9769C17.8571 16.7913 17.9808 16.8222 18.1515 16.8841C18.3212 16.9459 19.2352 17.395 19.4208 17.4888C19.6065 17.5816 19.7302 17.6275 19.7771 17.7053C19.823 17.7831 19.823 18.1544 19.6683 18.5884ZM16.0337 9.75531C12.6249 9.75531 9.85178 12.5266 9.85084 15.9325C9.85084 17.0997 10.1771 18.2369 10.7958 19.2203L10.943 19.4538L10.3187 21.7337L12.6577 21.1206L12.8827 21.2537C13.8315 21.8172 14.919 22.1153 16.028 22.1153H16.0308C19.4368 22.1153 22.209 19.3441 22.2108 15.9372C22.2108 14.2863 21.5696 12.7347 20.4024 11.5666C19.2352 10.3994 17.6837 9.75531 16.0337 9.75531ZM16.0309 23.3706H16.0281C14.7831 23.3706 13.5606 23.0584 12.475 22.4659L8.53281 23.5L9.58844 19.6478C8.93781 18.5209 8.59469 17.2422 8.59562 15.9316C8.5975 11.8337 11.9322 8.5 16.0309 8.5C18.0194 8.5 19.8869 9.27437 21.2903 10.6797C22.6938 12.0841 23.4672 13.9516 23.4662 15.9381C23.4644 20.0359 20.1287 23.3706 16.0309 23.3706ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2837 31 31 24.2837 31 16C31 7.71531 24.2837 1 16 1Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'youtube_3'"
    :width="size || '32'"
    :height="size || '32'"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.5 16.5662C23.5 17.7803 23.35 18.9944 23.35 18.9944C23.35 18.9944 23.2038 20.0275 22.7537 20.4831C22.1838 21.0803 21.5444 21.0831 21.2509 21.1178C19.1519 21.2697 16 21.2744 16 21.2744C16 21.2744 12.1 21.2388 10.9 21.1244C10.5662 21.0616 9.81625 21.0803 9.24625 20.4831C8.79625 20.0275 8.65 18.9944 8.65 18.9944C8.65 18.9944 8.5 17.7803 8.5 16.5662V15.4281C8.5 14.2141 8.65 13.0009 8.65 13.0009C8.65 13.0009 8.79625 11.9669 9.24625 11.5113C9.81625 10.9141 10.4556 10.9113 10.7491 10.8766C12.8481 10.7247 15.9972 10.7247 15.9972 10.7247H16.0028C16.0028 10.7247 19.1519 10.7247 21.2509 10.8766C21.5444 10.9113 22.1838 10.9141 22.7537 11.5113C23.2038 11.9669 23.35 13.0009 23.35 13.0009C23.35 13.0009 23.5 14.2141 23.5 15.4281V16.5662ZM16 1C7.71531 1 1 7.71531 1 16C1 24.2837 7.71531 31 16 31C24.2847 31 31 24.2837 31 16C31 7.71531 24.2847 1 16 1ZM14.4514 17.9453L18.5042 15.8453L14.4505 13.7303L14.4514 17.9453Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'person_fill'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 11.5C6.6625 11.5 0 13.175 0 16.5V17.75C0 18.4375 0.5625 19 1.25 19H18.75C19.4375 19 20 18.4375 20 17.75V16.5C20 13.175 13.3375 11.5 10 11.5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'chat_fill'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM5 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7ZM11 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H11C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'shopping_cart_fill'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.29989 16.7997C5.14491 16.7997 4.21043 17.7447 4.21043 18.8997C4.21043 20.0546 5.14491 20.9996 6.29989 20.9996C7.45487 20.9996 8.39985 20.0546 8.39985 18.8997C8.39985 17.7447 7.45487 16.7997 6.29989 16.7997ZM0 1.04998C0 1.62747 0.472492 2.09996 1.04998 2.09996H2.09996L5.8799 10.0693L4.46242 12.6313C3.69593 14.0383 4.70392 15.7497 6.29989 15.7497H17.8497C18.4272 15.7497 18.8997 15.2772 18.8997 14.6997C18.8997 14.1223 18.4272 13.6498 17.8497 13.6498H6.29989L7.45487 11.5498H15.2772C16.0647 11.5498 16.7577 11.1193 17.1147 10.4683L20.8736 3.65394C21.2621 2.96095 20.7581 2.09996 19.9601 2.09996H4.42042L3.71693 0.598489C3.54894 0.230996 3.17094 0 2.77195 0H1.04998C0.472492 0 0 0.472492 0 1.04998ZM16.7997 16.7997C15.6447 16.7997 14.7102 17.7447 14.7102 18.8997C14.7102 20.0546 15.6447 20.9996 16.7997 20.9996C17.9547 20.9996 18.8997 20.0546 18.8997 18.8997C18.8997 17.7447 17.9547 16.7997 16.7997 16.7997Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'lock_fill'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'delivery'"
    :width="size || '24'"
    :height="size || '24'"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.5 4H16V2C16 0.9 15.1 0 14 0H2C0.9 0 0 0.9 0 2V11C0 12.1 0.9 13 2 13C2 14.66 3.34 16 5 16C6.66 16 8 14.66 8 13H14C14 14.66 15.34 16 17 16C18.66 16 20 14.66 20 13H21C21.55 13 22 12.55 22 12V8.67C22 8.24 21.86 7.82 21.6 7.47L19.3 4.4C19.11 4.15 18.81 4 18.5 4ZM5 14C4.45 14 4 13.55 4 13C4 12.45 4.45 12 5 12C5.55 12 6 12.45 6 13C6 13.55 5.55 14 5 14ZM18.5 5.5L20.46 8H16V5.5H18.5ZM17 14C16.45 14 16 13.55 16 13C16 12.45 16.45 12 17 12C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14Z"
      :fill="color || 'black'"
    />
  </svg>

  <svg
    v-else-if="name == 'ae'"
    width="21"
    height="15"
    viewBox="0 0 56 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect width="56" height="40" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_235_6346" transform="scale(0.0178571 0.025)" />
      </pattern>
      <image
        id="image0_235_6346"
        width="56"
        height="40"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAYAAAHcVwkTAAAABGdBTUEAALGPC/xhBQAAAWtJREFUaAXtWUsOgkAMBeMNPARx6wFMPIExXsed9/AcHMDDuHFnSFgY1EUJzFDblFImpGw6v7Zv3iszGPNmt2+y77M5vX+m96x6vaCzhv7zcodma3meRVG0HtDIkwUECIeYgrmu/ctBd2HYbpmFiSGGYa5rI8chgrsO0BZDbdWCSJOTI4YqdoxY5cohzih2jKBOXgBiqFHlQAWB5VYSrKesGCkVGJs3TxipHyLjFm7oh/XNd2iekKS0LEuMHdE4+VoUr4coMOZkTql5QpJSP2mw4sDGzTX0hJgU4nHyaNO8LaqqylxDsVaY4/IpJatU8wKu6zojbwu/gLFqxMaXX6XmOySrFNMCxrW/eSCuljVnVAs4N45vkMtUqutcwVSV4eIiPy6oQLfzlVoy2/zvY2b0Bo/bw2wboBLP8puCAqU974eMNqPW8VxBa8a1840+Rbn/wmgD58bzEuUyleo6VzBVZbi4XEEuU6mu+wCxDkWlMps/NgAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>

  <svg
    v-else-if="name == 'au'"
    width="21"
    height="15"
    viewBox="0 0 56 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect width="56" height="40" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_235_6348" transform="scale(0.0178571 0.025)" />
      </pattern>
      <image
        id="image0_235_6348"
        width="56"
        height="40"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAYAAAHcVwkTAAAABGdBTUEAALGPC/xhBQAACSxJREFUaAXVWQlUVNcZ/t7MgAgEQdlUEAkQPVYQIbUqKESLlQMiuITEJWqLnmiisQatUYzUJVZF6/GgAo1J1LhUqbtBhdakHmi0VFmKtQWaiAsQy4DIPjPv9d43vvEN894wg+gxP+fN/e9//+X+d/v/e2HYwyc4xxVaUGiueQsOnsd4nP9hfYZz7OBAjpbt7e2cvcdRjgItmY7aOs456DLs7ZVoadEZpKgWhnIYKJ0QRac6X6VSFJhFy77lMr9egcUTduLg0e94ovDD0I4QHnDk75W2tQKdLxVc+U2wjY1QeHoYNdBK1x0qvxlnImWQfFQZDygYqEaGQbd3F5jw0XhlULakgEBU2jjOSLW1t8H492eCVauh7GiH4+LHQrtsybj6HufEI9qZ08/XEZXfNXUmQyEWul04xYRBSogymR0dEy0iAtNyq4JzfePvaD7kgZOtfpi7qAANRT+Hc3CeiM0UVfhNLUKzRzpYjQYhI1x4fFh0vilnJ4p+CTAMyAogQBcCXRCAo2g5rFw2DNt336IMBuB9bDziBa26DoybK0rsAxAx5S8GBjlE0eydhfDNTdBptciudcPrP3XntwoV6OtiayRHLQtgdlTjY71w+vw9gdeoNCtoxNmpYthZKhUdEsvBIPjoXiIG9O8tKbljc4gJvdtdZSKiL3O5O31hszMdD9ZvQkDoeTz+vB+Y5BSc/OQ4Fi67hh/Kp0P1ziKw06ZgQ8WrJnNq0h0zBNXAAb0xP62GsMzAof72aJpbRqZ0LJTt7Ygf3Ihp6zvwUN2GXzsuAC4DRSV3ZNVtSQ2GWt1htkOMZuEyTpgGfrESdUx1DZiiUrCTo/TKnzDQQrN7K/oNPi1rtKsGfi7+VzkNvWfNB9lUqE5aAuf8PNi+l4zi3AIEtd2DavV6PD6dDc+h1hmS8ljRuL8f8r6ugcO1ODjs84F/6AWw7q7QRkWi+J9q9Ikvh8PtOSi91YDm7QyqbiUYnFg439+wiwxEEfJRapHJ8HZ7tYn0SqI5f3oD0dOvmLTJGrS1VaCjgzUReFaCYSMKimxsFPww1Ve9iWOfhwvkHitlPeyOhcOfhuFVEpzGTLwkK96jBmWtiBoYLmEO13JoP9z8TvLkQ1ljMW3d20DaJjjMrTWwVv8rHk6bNuIt9WScy7lvoFuLKOqzMmEf/ybUJb9A2Gg3kIwJnEYLlgQQCimrhqPhzyFwmhwD7Nj8TMaoPpXX8LO4eGIfxm3cgsuhbqgLHwvodOBYVr/Hosi+4yai4PeHESVO8Kh0N0BBo1fGgUoci1wMNjIczlXlxKCWN8h9mALNqcNIaQnDns8qQHnNAQ2Z9HQxB0+jPuUSDtMniFAVzlqQ7GD2hD04c0F6DmmqmfpJicnpIu6Aip004amdJy2Kr3LBjQwE19+TpwgGaQc6WuUPA6OcWmxFhKuczo6BUsmg4e5MKCJj0bE1FYrzF6FbMBu2v90G7dVL8B19CXUk7OihWiRuPaqYk+iLurxQKEaOh/bcceRrBwBkhbJaHbSF30CVMAuVR4ZgfJi71dql5lSR2XoUNvkFKD5wCn2GnEd1dQs4Yowlq7SP9wkc/NVOKMsrkBN9Dx+vDjQx2jnXEjOkrgniA7KYxtCrin/wGVTXtPL09LQRmPVVGjQL58Hj7Qc8jSY7t6/FoO3qdbjPrjLI00WyfHUh/vBFhYHWFfJMRxtN6gN/4iybFEoZN4kWUkxyNHoZkMpAaSyUg2fyUE6pObqkhzT4Pi+Q1FxSEANrU2pLO2hikEZ5by8H0FScRv+eBhONK9b8Aw/IXqSg0cgfY1IdodtE6l4g5lWJKxR/UN2KgJFnO5MtqpeU1cPTQ/qCIih4OVap0JvnUTLtrRpOee06lCkboU2aB+U7iTh5tgpLVxbiUaOGt0nznIRe5fyNit6RubSNONUewN/RhU4NCXDC3m0hGDXKHczRE2DSPwViJoFLScbQ18/h3n39uhD4X1SpchmcDZ9BDjh3+AgGObFgEhdges0PiMtYC2XkWD5483kVCR4MCSI0BtN0hwaTyHAP3qmBHr2g2pMFLPkd8JofNFs2oC12Kt5NLsTp/n98Ub5I2uF34Z2qZgSNuwTX0DwcnLoO7JXzsLl+nYTkcfjNlc2YGuHCO0VzOSG9ip/kgQtel+GTQM6kuERox4dBe/0KPg5aDpewfP5iJ3WsS/biORIZ+mBoiX7FxTwol39EZpADu2sruRpPJBkcWa4ka6YlBQGnpQAUDSGD9z0ZRGuA5iY0XaDQVRpoTq9K5T+S7KonHSSdp7j+PUpCjH+x4qBcuhJKiebODlLH2/9diBGBzlY72K9fL94xaqZvX+P3KQnTsiSmtbWV9Es/4uZmRJmTC9XSVXxirk3fBl30k8cNWdX6hpvF9Zg6K9/o9bgLkR5tVgmvLb4+jvgy42cIHOoE5fbdQPYZMnTO0CV/AF1UhH4PkkOGTjZL9iKdc7u9+4GD5LHc1wea9B2o0dkjbvZV/Kei6xfeHvXCjDLFl1lj0FSdiNIljxGcNBPK2UnQxEwGe+Ov2J2YBs+lDcg+/T1xioR9emEkt1Sy2XCKvEyOy30Nd05dgOaLDNhs3wXvGfEoXNcbj8gFhd4dnifQPUpTC/pRXA5UCWmLgQtDoFm7Cprp07FuSykyY8qID2XGMhxxkFxu+G1InOWUHG4UqTFsbA7PFx8bi4zcVNipH8JmThIyhwRg391V2JVZjnWbio11kZrw0kEbKv/bhDkL8014zBEs3aOq+0eO44M1N5Az6htZfQeO3sGoHRFwu1PK8zys68CBD4uM+GlIoB8dgEUL3sd7c/3Qt0kHdX27EZ9QqaltJTd3b75a8O1DgWxxuXr9TYt4X3iuZlGvZJi8BtrzLdZkRSbptozul4I8McIT9LMGflQzaI1jAq9VM5g0zx/0+zFBlzM4Lc4b7/4yAAF+TnB3s+N9q33YhorKRmR8Vk5uHndfan+7dJD2nl7waytmwM5On6C1teng4Z9NosbTnLOnvaRvo6VlDbxaax9/xH2xaIkGB7lgw9ZS8j+mE/xH8RGBLmI9PY67udqh5G+x/Efx7oJFM9hd5c8iRx8l1fX6J1kxbq1Oi2bQWqU9wS84R3WJcWt1v7QOWuuIHP//ATz2rGOGKk3DAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>

  <svg
    v-else-if="name == 'cn'"
    width="21"
    height="15"
    viewBox="0 0 56 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect width="56" height="40" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_235_6351" transform="scale(0.0178571 0.025)" />
      </pattern>
      <image
        id="image0_235_6351"
        width="56"
        height="40"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAYAAAHcVwkTAAAABGdBTUEAALGPC/xhBQAABFRJREFUaAXtWU2IHEUU/rq7Zrp7pmeIWbO7ZFlDko0QSPwhMf4ED94ET6JeEhA0UcxBzEEJ0ZMH8SKIEaJEDxLBk+BZQTwpHhQVBQ/RVcGQNT+andmdmd3p6fZVz3Znaruru2amtwlh6zDd9d773nv16lVXvRpt8dCsD0nTJfSAHDFrH83F5LSR1WYjK6dnYvY4IXDI2GUGTPPJCUEoW60gPtCRIq3jk+h8eHlAVHyNgM7bO6BPlQNu48gFUSqhFwETeKmkaEpSpRKYIwPzdbX+yZ4E50SS4GrpkXrAVYkqC/WEVthdVbTfuQRjXwW9X1ohO/YULHIuB/FWfTU5EQMm/eQbHHbACRVLnzFXuaT7/ZIUEDISgSEz7TkycOTgpHmTxpN6qjkiy5izUH1rR5ouJZ6gVZ8uQZ8pQ7+jjNq53ah9PAd9lvpE8673sPzyX4CpgSenNhHlqpKhUEgw6C104V1chfXsZMDXDA2MMp3T/KvdPmbFB186/jU31DHUUzAYIMmI+0MrUMoVG/srgkJjr43KazPQ6oZAV+2oJ03VQP2DXWie/BP+5bXRqloZkFM3OAAa5zUe0nG0KWBvfYM38RzScsmjKc+h+cTW/qdtTMNSg/Yr24UB+Ys9+M0e0JMeMgV5WUdqsHRvVcCsfn4drdf/DmjsgewdUwAPdG58gZkGfVsJoC8WO9hXaNxpw295tLV64N9Z3px3d0K7jaH57YUBNeqvQpbqOy04b8zG0I1jv9PxgwxT4yfclU+vxWRUCYLBEBSejXhf5VAV4lSesTlk9/fD2f2m2ceXxeVgn5oJ9kMV5UkyN+ZwjWs9M4nGUZofSsbO+SvB3th5/58Iq5ED4+RpYkgj7ete2OEa3K/XRr6Op9qNjVAGdN6j7HQMNIsyuPrFIlY/+1fmjzJ9qJAqa00RjGVpimwurE2DuYRxUMmtH9LCl8VgeIt435ApZAerMI9uK8L/TBsjDZBXkbLGayv7xWmYj20Jqsv1tZcMt1H0oVOUX+bwanXpxDz8pf4hJ8k5Xq+z+xx0v2oksQujDTVArWbAOUubMK+Qf26h9ebFTEfZ3RWww3U6fjIYuy00n/4tE5OngHSA5Ue3wDxyOzQ6G6s2j6rw1plL8OZXBIh1Ygrlh+vwux7dVC2jfWZB4G9kRzrAyGhFh31sCqUHkysJ7nTn/FV0v1yMIDfTS/ZHhqqY9rmFIPpJjrs/tTMHZz41EVxr8eurUa+ukmyr0JQOwPbxKWglHe6vbbTP0mDpuouvLeuFaZRoS+hSWed+J7kkpQxnhxyYj28N/Gk8TxVYgS0zRYMtwTbg/dGRusUeolIjLLKkUvQPCl1I+v+5qV/fFPhIrMwBDquV3VMFO1CllDRhbC+h+dz8sCpylc9eg0Oac39cpv8WKC33WDRlGuyXpofUkK947jOYr3vja8t9Bsd3KV8NmwPMN57Fa9ucweJjnq/FzRnMN57Fa/sfhCUdA9q3qTIAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
</template>

<script setup>
const props = defineProps(["name", "color", "size"]);
</script>

<style lang="scss" scoped></style>