Ext.define('TP.view.Main', {
    // This class -Panel- alog with the -Container- class will be the backbone of our application in terms
    // of our layout. This will be almost always the starting point of a single page application. In the code
    // below i am extending this class. Extending means that i can use the methods, properties and events 
    // of this class. See in documentation under Methods, Properties, Events.

    extend: 'Ext.Panel',
    // xtype allow us to generate instances of our view within the item configuration parameters of other
    // component. 

    // Whenever we use a panel or container, we can define the type of layout that we want to have. i can go
    // to docs in the documentation and look up the guide on layout. I can start out with Hbox and Vbox

    // NEXT i can have fit and card layouts.Fit is what the view port is. It will fit one child and it will
    // fit that child to take the whole screen real state.Card does the same as fit but i can have <> views
    // all of them one on top of the other one. They therefore take the full real state but i see one at the
    // time.This allows us to use panel.setActiveItem() method to change which child view i want to see.
    // For example Items has children, but no of them were in the begining declared the type of child they are
    // to do that, i will use xtype: 'container' for example.

    // ANOTHER TYPE of layout is dock. THis element is fixed to either the side, the top of the bottom.
    // it can be use for menus, title bars etc.


    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        layout: 'vbox',

        items: [

             {
                docked: 'bottom',
                xtype: 'titlebar',
                title: 'Welcome to my Dog App',
                items: [
                // The default child item for a docked clas is a buttom, so i dont need to specify that
                // i will create a botton.bUt in this case i will do as a best practice.

                   {
                    xtype: 'button',
                    text: 'Discover a Husky',
                    listeners: {
                      tap: function(e){
                        var cardLayout = Ext.getCmp('card-layout');
                        cardLayout.setActiveItem(0);
                      }
                    }
                   },
                   {
                    xtype: 'button',
                    text: 'Discover a Pit Bull',
                    listeners: {
                      tap: function(e){
                        var cardLayout = Ext.getCmp('card-layout');
                        cardLayout.setActiveItem(1);
                      }
                    }
                   },
                   {
                    xtype: 'button',
                    text: 'Discover a Malinois',
                    listeners: {
                      tap: function(e){
                        var cardLayout = Ext.getCmp('card-layout');
                        cardLayout.setActiveItem(2);
                      }
                    }
                   },
                   {
                    xtype: 'button',
                    text: 'Discover a Labrador',
                    listeners: {
                      tap: function(e){
                        var cardLayout = Ext.getCmp('card-layout');
                        cardLayout.setActiveItem(3);
                      }
                    }
                   },

                ]
             },

            {
               style: 'background: #999999',
               flex: 1
            },

            {
                style: 'background: #666666',
                flex: 3,
                layout: 'hbox',
                items: [

                     {
                       xtype: 'container',
                       style: 'background: #333333',
                       flex: 1
                     },
                     {
                       style: 'background: #999999',
                       flex: 4,
                       // I am defining here my layout as an object
                       // Check Document/layout in the documentations
                       layout: {type:'card', animation:{type:'flip'}, align:'start'},
                       id:'card-layout',
                       items:
                        [
                          {
                            //html:'<strong> CARD ITEM1 </strong>'
                            xtype: 'image',
                            src: 'resources/images/huski.jpg'
                          },
                          {
                            //html:'<strong> CARD ITEM2 </strong>'
                            xtype: 'image',
                            src: 'resources/images/3A6X0027.jpg'
                          },
                          {
                            //html:'<strong> CARD ITEM3 </strong>'
                            xtype: 'image',
                            src: 'resources/images/Malinois_low_resolution.jpg'
                          },
                          {
                            //html:'<strong> CARD ITEM4 </strong>'
                            xtype: 'image',
                            src: 'resources/images/dog2_lowres.jpg'
                          },
                        ]
                     },
                     {
                       style: 'background: #666666',
                       flex: 1
                     },
                ]

            }

        ]
        
    }
});
