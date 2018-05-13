$(function() {
    // GENERATE ID
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        
        for (var i = 0; i < 10; i++) {
            str = str + chars[Math.floor(Math.random() * chars.length)];
        }
        
    return str;
    }
    
    // CREATE COLUMN CLASS
    function Column(name) {
        var self = this; 
        
        this.id = randomString();
        this.name = name;
        this.$element = createColumn();
        
        function createColumn() {
            // CREATING COMPONENTS OF COLUMN
            var $column = $('<div>').addClass('column'),
                $columnTitle = $('<h2>').addClass('column-title').text(self.name),
                $columnCardList = $('<ul>').addClass('column-card-list'),
                $columnDelete = $('<button>').addClass('btn-delete').text('x'),
                $columnAddCard = $('<button>').addClass('add-card').text('Add a card');
        }
        
        // ADD EVENTS
        $columnDelete.click(function() {
            self.removeColumn();
        });
        $columnAddCard.click(function() {
        self.addCard(new Card(prompt("Enter the name of the card")));
        });
        
        // CONSTRUCTION COLUMN ELEMENT
        $column.append($columnTitle)
                .append($columnDelete)
                .append($columnAddCard)
                .append($columnCardList);
        
        // RETURN OF CREADED COLUMN
        return $column;
    }
    
    // CREATE COLUMN PROTOTYPE
    Column.prototype = {
        addCard: function(card) {
            this.$element.cildren('ul').append(card.$element);
        },
        removeColumn: function() {
            this.$element.remove();
        }
    };
    
// CREATE CARD CLASS
function Card(description) {
	var self = this;

    this.id = randomString();
    this.description = description;
    this.$element = createCard();

    // FUNCTION CREATE CART
    function createCard() {
    	// CREATING COMPONENTS OF CARD
        var $card = $('<li>').addClass('card'),
            $cardDescription = $('<p>').addClass('card-description').text(self.description),
            $cardDelete = $('<button>').addClass('btn-delete').text('x');
        
        // ADD EVENT
        $cardDelete.click(function(){
            self.removeCard();
        });
    }
}
    
});