Feature: Adding Items To Shopping Cart

   @testAcceptance
   Scenario: Verify if one item was added to shopping cart
      Given I open Quicksilver homepage
      When I search for leather belts
      And I Add belt to cart
      Then I verify quantity and url
    
   Scenario: Add second item to shopping cart
      Given I open Quicksilver homepage
      When I search for Men's Hoodies
      Then I add second item to cart

   Scenario: Add multiple items to cart
      Given I open Quicksilver homepage
      When I search for beanie
      And I add item to cart
      And I increase the quantity to three
      Then I check the quantity in cart


