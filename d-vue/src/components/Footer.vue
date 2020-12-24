<template>
  <footer class="Footer">
        <div class="Test">
      <img
        class="Footer-EnerpackImage"
        src="../assets/images/Enerpack-Footer.svg"
        alt=""
      />
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
    <img
      class="Footer-image"
      src="../assets/images/footer.png"
      alt="Ccity view from above"
    />
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.Footer{
    position: relative;
    width: 100%;
    &-image{
        width: 100%;
    }
    .Test{
        color: #FFFFFF;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        position: absolute;
        background-color: #3f3e3e;
        opacity: 91%;        
        padding-bottom: 3em; 
        box-sizing: border-box;     
    }
    &-link:link, &-link:visited{
        color: #FFFFFF;
    }
    &-social{
        display: flex;
        flex-flow: column nowrap;
        padding-right: 6%;
        p{
            width: 100%;
            margin-bottom: 0;
            display: inline-block;
        }
    }
    &-items{
        margin: 0;
        padding: 0;
    }
    &-item{
        display: inline;
        font-size: 40px;
        padding-right: 0.3em;
    }
    &-EnerpackImage{
        width: 22%;
        padding-left: 6%;
    }
}
</style>
