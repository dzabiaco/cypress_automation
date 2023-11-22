class ProductsPage {
    checkoutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
}


// npx cypress run --record --key 0d5f1dcb-6ec9-4bd2-9a1e-40e21a973ddb
// 0d5f1dcb-6ec9-4bd2-9a1e-40e21a973ddb
export default ProductsPage;
