    <header>
    <button class="hamburguer" onclick="toggleMenu()">☰ Filtros</button>
    </header>


<aside class="filter-menu" id="filterMenu">
    <h3>Filtrar por categoria</h3>
    <ul>
      <li onclick="toggleSubmenu('camisetasSubmenu')">Camisetas</li>
<ul id="camisetasSubmenu" class="submenu">
  <li onclick="filterProducts('Corinthians')">•Corinthians</li>
  <li onclick="filterProducts('Palmeiras')">•Palmeiras</li>
  <li onclick="filterProducts('SãoPaulo')">•São Paulo</li>
  <li onclick="filterProducts('Santos')">•Santos</li>
  <li onclick="filterProducts('Mostrar todas as camisetas')">•Todas as Camisetas</li>
</ul>

      <li onclick="filterProducts('Bermudas')">Bermudas</li>
      <li onclick="filterProducts('Calças')">Calças</li>
      <li onclick="filterProducts('Chuteiras')">Chuteiras</li>
      <li onclick="filterProducts('Tênis')">Tênis</li>
      <li onclick="filterProducts('Acessorios')">Acessórios</li>
      <li onclick="filterProducts('Todos')">Mostrar Todos</li>
    </ul>
  </aside>

   <div class="cards-container">

 <div class="card produto Camisetas Corinthians">
    <div class="image-container">
      <img src="Camisa Corinthians/Camisa Corinthians 1.png" alt="Corinthians 1">
    </div>
    <div class="info">
      <h3>Corinthians 1</h3>
      <p>R$ 49,90</p>
    </div>
  </div>

   <div class="card produto Camisetas Palmeiras">
    <div class="image-container">
      <img src="Camisa Corinthians/Camisa Corinthians 1.png" alt="Corinthians 1">
    </div>
    <div class="info">
      <h3>Palmeiras  1</h3>
      <p>R$ 49,90</p>
    </div>
  </div>

    </div>


