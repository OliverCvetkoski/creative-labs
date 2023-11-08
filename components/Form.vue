<template>
  <div class="flex justify-center items-center p-12">
    <div class="flex flex-col pb-2">
      <div class="md:text-left text-center">
        <h2 class="text-4xl font-bold">Contact us</h2>
      </div>
      <br />
      <p>
        Do you want to be a part of this network and amazing journey? Contact
        us, and we will get back to you.
      </p>
      <br />
      <div class="pb-3 justify-between">
        <div class="grid md:flex gap-3">
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
            class="placeholder-black p-2 flex-1"
            style="background-color: #f5f5f5"
          />
        </div>
      </div>

      <input
        type="email"
        placeholder="E-mail"
        required
        style="background-color: #f5f5f5"
        class="placeholder-black p-2"
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
