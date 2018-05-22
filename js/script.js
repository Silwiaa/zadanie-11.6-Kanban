$(function() {
    
    //BOARD OBJECT
    var board = {
        name: 'Kanban Board',
        addColumn: function(column) {
            this.$element.append(column.$element);
            initSortable();
        },
        $element: $('#board .column-container')
    };
    
    // GENERATE ID
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ',
            str = '';
        for (var i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
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
            var $column = $('<div>').addClass('column col-m-4 col-s-12'),
                $columnTitle = $('<h2>').addClass('column-title').text(self.name),
                $columnCardList = $('<ul>').addClass('column-card-list'),
                $columnDelete = $('<button>').addClass('btn-delete').text('x'),
                $columnAddCard = $('<button>').addClass('add-card').text('Add a card');
        
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
        
            // RETURN CREADED COLUMN
            return $column;
        }
    }
    
    // CREATE COLUMN PROTOTYPE
    Column.prototype = {
        addCard: function(card) {
            this.$element.children('ul').append(card.$element);
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

            // CONSTRUCTION OF CARD ELEMENTS
            $card.append($cardDelete)
                .append($cardDescription);

            // RETURN CREADED CARD
            return $card;
        }
    
        // CREATE CARD PROTOTYPE
        Card.prototype = {
           removeCard: function() {
               this.$element.remove();
           }
        };
    }
   
    // SET initSortable FUNCTION
    function initSortable() {
        $('.column-card-list').sortable({
            connectWith: '.column-card-list',
            placeholder: 'card-placeholder'
        }).disableSelection();
    }
    
    // ADD COLUMN BUTTON
    $('.create-column')
    .click(function(){
        var name = prompt('Enter a column name'),
            column = new Column(name);
            board.addColumn(column);
    });
    
    // CREATING COLUMNS
    var todoColumn = new Column('To do'),
        doingColumn = new Column('Doing'),
        doneColumn = new Column('Done');

    // ADDING COLUMNS TO THE BOARD
    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);

    // CREATING CARDS
    var card1 = new Card('New task'),
        card2 = new Card('Create kanban boards');

    // ADDING CARDS TO COLUMNS
    todoColumn.addCard(card1);
    doingColumn.addCard(card2);
});