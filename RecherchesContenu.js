function chercherContenu() {
    var a = document.getElementById("search").value.toLowerCase(); // Récupérer le mot-clé et convertir en minuscules
    var contenu = document.getElementById("contenu");

    if (a === "dark" || a === "Dark") { //Ameliorer la recherche pour que ça soit plus large
        contenu.innerHTML = `
        <article class="RechercheBar">
					<figure>
						<img src="images/principale_Dark.png" alt="better call saul" title="Dark" width="250">  <!--imge de serie-->
					</figure>
					<section class="Misenpage">
						<h6>Dark</h6>
						<div class="Misenpage2">
							<p>5.6</p>
							<figure>
								<img src="images/principale_etoile.png" alt="image d'une étoile" title="image d'une étoile" width="14" height="14">
							</figure>
							<p>| Action</p>
							<figure>
						</div>
							<img class="liste1" src="images/principale_listDajout.png" alt="list" title="list" width="50"> <!--image de rajout liste-->
						</figure>
					</section>
                    </article>`;
        } else if (a === "better call saul" || a === "Better call saul") {

        contenu.innerHTML = `
        <article class="RechercheBar">
					<figure>
						<img src="images/principale_SaulGoodman.jpg" alt="better call saul" title="better call saul" width="250">  <!--imge de serie-->
					</figure>
					<section class="Misenpage">
						<h6>Better call Saul</h6>
						<div class="Misenpage2">
							<p>5.6</p>
							<figure>
								<img src="images/principale_etoile.png" alt="image d'une étoile" title="image d'une étoile" width="14" height="14">
							</figure>
							<p>| Action</p>
							<figure>
						</div>
							<img class="liste1" src="images/principale_listDajout.png" alt="list" title="list" width="50"> <!--image de rajout liste-->
						</figure>
					</section>
                    </article>`;
                } else if (a === "Malcolm" || a === "malcolm") {

        contenu.innerHTML = `
                    <article class="RechercheBar">
                                <figure>
                                    <img src="images/principale_Malcolm.jpg" alt="Malcolm" title="Malcolm" width="250">  <!--imge de serie-->
                                </figure>
                                <section class="Misenpage">
                                    <h6>Malcolm</h6>
                                    <div class="Misenpage2">
                                        <p>5.6</p>
                                        <figure>
                                            <img src="images/principale_etoile.png" alt="image d'une étoile" title="image d'une étoile" width="14" height="14">
                                        </figure>
                                        <p>| Action</p>
                                        <figure>
                                    </div>
                                        <img class="liste1" src="images/principale_listDajout.png" alt="list" title="list" width="50"> <!--image de rajout liste-->
                                    </figure>
                                </section>
                                </article>`;            
        } else {
    contenu.innerHTML = "Aucun contenu correspondant n'a été trouvé.";

}
}