function Column(id, name) {
	var self = this;
	
	this.id = id;
	this.name = name || 'No name given';
	this.element = createColumn();

	function createColumn() {
		// TWORZENIE NOWYCH WĘZŁÓW
		var column = $('<div class="column"></div>');
		var columnTitle = $('<h2 class="column-title">' + self.name + '</h2>');
		var columnCardList = $('<ul class="card-list"></ul>');
		var columnDelete = $('<button class="btn-delete">x</button>');
		var columnAddCard = $('<button class="column-add-card">Dodaj kartę</button>');
		
		// PODPINANIE ODPOWIEDNICH ZDARZEŃ POD WĘZŁY
		columnDelete.click(function() {
			self.deleteColumn();
		});
		$columnAddCard.click(function(event) {
	       var cardName = prompt("Enter the name of the card");
	       event.preventDefault();
	       $.ajax({
        url: baseUrl + '/card',
        method: 'POST',
        data: {
              //body query
        },
        success: function() {
            //create a new client side card
        }
    });
});
			
			// KONSTRUOWANIE ELEMENTU KOLUMNY
		column.append(columnTitle)
			.append(columnDelete)
			.append(columnAddCard)
			.append(columnCardList);
			return column;
		}
	}
Column.prototype = {
	createCard: function(card) {
	  this.element.children('ul').append(card.element);
	},
	deleteColumn: function() {
        var self = this;
        $.ajax ({
            url: baseUrl + '/column/' + self.id,
            method: 'DELETE',
            succes: function(response){
                this.element.remove();
            }
        });
	  
	}
};