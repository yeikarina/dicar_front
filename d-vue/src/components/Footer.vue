<template>
  <footer class="Footer">
    <!-- <img
      class="Footer-image"
      src="../assets/images/footer.png"
      alt="Ccity view from above"
    /> -->
    <div class="Test">
      <img
        class="Footer-EnerpackImage"
        src="../assets/images/Enerpack-Footer.svg"
        alt=""
      />
      <section class="Phone">
        <h3 class="Phone-title">Teléfonos y contactos</h3>
        <div class="Phone-info">
          <i class="fas fa-phone-square-alt Phone-icon"></i>
          <ul>
            <li><a href="tel:+573797837">(+57) 379 7837</a></li>
            <li><a href="tel:+573233636670">(+57) 323 363 6670</a></li>
            <li><a href="tel:+573168529195">(+57) 316 852 9195</a></li>
            <li><a href="tel:+573053433238">(+57) 305 343 3238</a></li>
            <li><a href="tel:+573224657319">(+57) 322 465 7319</a></li>
          </ul>
          <!-- <p> / </p> -->
        </div>
        <div class="Phone-info">
          <i class="fas fa-mail-bulk Message-icon"></i>
          <ul>
            <li><a href="mailto:gerencia@dicar.co">gerencia@dicar.co</a></li>
            <li><a href="mailto:comercial@dicar.co">comercial@dicar.co</a></li>
            <li><a href="mailto:comercial4@dicar.co">comercial4@dicar.co</a></li>
            <li><a href="mailto:financiero@dicar.co">financiero@dicar.co</a></li>
          </ul>
        </div>
      </section>
      <section class="Footer-social">
        <p>Siguenos en:</p>
        <ul class="Footer-items">
          <li class="Footer-item">
            <a href="" class="Footer-link">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li class="Footer-item">
            <a href="" class="Footer-link">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li class="Footer-item">
            <a href="" class="Footer-link">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@function emTopx($fontSize, $em) {
  @return $fontSize * $em;
}

@function pxToem($fontSize, $px) {
  @return $px / $fontSize;
}

.Footer {
  position: relative;
  width: 100%;
  height: 300px;
  background: url("../assets/images/footer.png");
  // &-image {
  //   width: 100%;
  // }
  .Test {
    color: #ffffff;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // flex-direction: row;
    align-items: flex-end;
    position: absolute;
    background-color: #3f3e3e;
    opacity: 0.91;
    padding-bottom: 3em;
    box-sizing: border-box;

    .Phone {
      align-self: center;
      position: relative;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      &-title {
        width: 100%;
        text-align: center;
        font-size: 25px;
      }
      &-info {
        width: pxToem(16, 208) * 1em;
        display: flex;
        flex-flow: row nowrap;
        box-sizing: border-box;
      }
      .Phone-icon,
      .Message-icon {
        font-size: 40px;
      }
      ul {
        padding: 0;
        margin: 0;
      }
      li {
        margin-bottom: 2%;
        list-style: none;
      }
      a {
        font-weight: 500;
        font-size: 16px;
        margin: 0;
        margin-left: 1em;
        transition: 0.3s;
        display: inline-block;
      }
      a:link,
      a:visited {
        color: #ffffff;
        transition: 0.3s;
      }
      a:hover{
        color: #f7cf18;
      }
      
      
    }
  }
  &-link:link,
  &-link:visited {
    color: #ffffff;
  }
  &-social {
    display: flex;
    flex-flow: column nowrap;
    padding-right: 6%;
    p {
      width: 100%;
      margin-bottom: 0;
      display: inline-block;
    }
  }
  &-items {
    margin: 0;
    padding: 0;
  }
  &-item {
    display: inline;
    font-size: 40px;
    padding-right: 0.3em;
  }
  &-EnerpackImage {
    width: 22%;
    padding-left: 6%;
  }
}
</style>
