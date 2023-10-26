
function Card() {
    return (
        <div class="card-deck" >
        <div class="row">
            <div class="col-sm card text-white bg-primary mx-3" >
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div class="col-sm card text-white bg-danger mx-3">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>

            <div class="col-sm card text-white bg-success mx-3">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            </div>


        </div>
        
      </div>
    );
  }
  
  export default Card;
  