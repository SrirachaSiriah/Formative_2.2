console.log('js');

$(document).ready(function(){

  // ==========================================================
  // Declaration of an array of objects
  // ==========================================================

var shoes = [
  {
    id : 100,
    type : 'Womens Shoe',
    name : 'Nike Air Force 1 Sage Low',
    color : '3 colours',
    price : '$200',
    size : 'US 5-12',
    photo : 'air_force.jpg'
  },
  {
    id : 101,
    type : 'Unisex Shoe',
    name : 'Nike Blazer Mid 77',
    color : '5 colours',
    price : '$170',
    size : 'US 5-12',
    photo : 'blazer_mid.jpg'
  },
  {
    id : 102,
    type : 'Womens Shoe',
    name : 'Nike Air Max 90',
    color : '2 colours',
    price : '$200',
    size : 'US 5-12',
    photo : 'air_max.jpg'
  },
  {
    id : 103,
    type : 'Unisex Shoe',
    name : 'Nike Air Jordan 1',
    color : '2 colours',
    price : '$190',
    size : 'US 7-18',
    photo : 'air_jordan.jpg'
  },
  {
    id : 104,
    type : 'Mens Shoe',
    name : 'Nike Air Jordan 1 Low Premium',
    color : '1 colour',
    price : '$220',
    size : 'US 7-18',
    photo : 'air_jordan_1.jpg'
  },
  {
    id : 105,
    type : 'Womens Shoe',
    name : 'Nike Court Royale 2 Mid',
    color : '2 colours',
    price : '$120',
    size : 'US 5-12',
    photo : 'court_royale.jpg'
  }
];// end of object array list

var i = 0;
for (i = 0 ; i < shoes.length; i++){
  $('#result').append( '<div class="col-md-4 mb-2">' +
                            '<div class="card border-primary mb-3 text-secondary" style="width: 18rem;">' +
                               '<img src="images/' + shoes[i].photo + '" class="card-img-top" alt="' + shoes[i].type + '">' +
                               '<div class="card-body bg-primary ">' +
                                '<h2 class="card-title">'+ shoes[i].name + '</h2>' +
                                '<h5 class="card-text text-secondary">' + ' ' + '<span class="text-secondary">' + shoes[i].type + '</span> <br></h5>' +
                                 '<h5 class="card-text text-secondary">' + ' ' + '<span class="text-secondary">' + shoes[i].color + '</span> <br></h5>' +
                                 '<h5 class="card-text text-secondary">' + ' ' + '<span class="text-secondary">' + shoes[i].price + '</span> <br></h5>' +

                                '<button id="' + shoes[i].id + '" type="button" class="btn btn-warning moreDetails" data-toggle="modal" data-target="#exampleModal">More Shoes'+ " " + '</button>' +
                              '</div>' +
                            '</div>' +
                        '</div>'
                    ); //append ends here

  } //end of for loop

 // modal
  $('.moreDetails').click(function(){
  $('#imageShoes').text(' '); //clearing the content
  console.log(this.id);

  var i=0;
  for (i = 0; i < shoes.length; i++) {

    if (parseInt(this.id) === shoes[i].id) {
      console.log(shoes[i].id, shoes[i].name, shoes[i].price);
        $('#exampleModalLabel').text(shoes[i].name);
        //append will keep  adding to existing content, so clear if you want
        //or else use html to replace existing content
        $('#imageShoes').append('<img class="img-fluid text-secondary" src="images/' + shoes[i].photo + '" alt=""/>');
        $('.modalContent').append('<div class="text-secondary display-4 p-2"' + shoes[i].type + '<br>' + shoes[i].color + '<br>' + shoes[i].price + '<br>' + shoes[i].size);
    } //end of if statement
  }//end of for statement
}); // end of moreDetails click event




}); // End of document.ready()
