<template>
  <div class="flex justify-center items-center h-screen mt-12 lg:mt-24 mb-8">
    <div class="flex flex-col w-9/12 lg:w-6/12 pb-2">
      <div class="lg:text-left text-center">
        <h2 class="text-4xl font-bold">Contact us</h2>
      </div>
      <br />
      <p>
        Do you want to be a part of this network and amazing journey? Contact
        us, and we will get back to you.
      </p>
      <br />
      <div class="mb-4 lg:flex lg:flex-col justify-between">
        <div class="grid lg:flex">
          <input
            type="text"
            placeholder="Name"
            required
            class="placeholder-black p-2 flex-1"
            style="background-color: #f5f5f5"
          />
          <input
            type="text"
            placeholder="Company"
            required
            class="lg:ml-4 placeholder-black p-2 flex-1 mt-4 lg:mt-0"
            style="background-color: #f5f5f5"
          />
        </div>
      </div>

      <input
        type="email"
        placeholder="E-mail"
        required
        style="background-color: #f5f5f5"
        class="placeholder-black p-2 pr-12"
      />
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Message"
        style="background-color: #f5f5f5"
        class="placeholder-black p-2"
      ></textarea>
      <br />
      <div class="flex flex-row-reverse">
        <button
          style="background-color: #58c08e"
          class="py-2 px-10 text-white font-bold"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>
