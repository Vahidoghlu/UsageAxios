

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
    <a class="navbar-brand" href="#">Axios Lesson 1</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
            tag="li"
            class="nav-item"
            active-class="active"
            exact
            to="/posts">
          <a class="nav-link" href="#">Siyahı</a>
        </router-link>
        <router-link
            tag="li"
            class="nav-item"
            active-class="active"
            exact
            to="/new-post">
          <a class="nav-link" href="#">Əlavə et</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
