describe('homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays title & taglines', () => {
    cy.get('#home h1').should('have.length', 1)
    cy.get('#home h1').first().should('have.text', ' Wouter Vernaillen ')

    cy.get('#home p').should('have.length', 2)
    cy.get('#home p').first().should('have.text', ' Freelance Full Stack Developer ')
    cy.get('#home p').last().should('have.text', ' Java, Spring, Vue & Liferay ')
  })

  it('action buttons', () => {
    cy.get('#home a').should('have.length', 2)
    cy.get('#home a').first().should('have.text', ' Blog ')
    cy.get('#home a').last().should('have.text', ' About Wouter ')

    // navigate
    cy.get('#home a').first().click()
    cy.location('pathname').should('include', '/blog')
    cy.go('back')
    cy.location('pathname').should('not.include', '/blog')
    cy.get('#home a').last().click()
    cy.location('pathname').should('include', '/about')
    cy.go('back')
    cy.location('pathname').should('not.include', '/about')
  })

  it('test player & audioMotionAnalyzer', () => {
    cy.get('#vueAudioMotionAnalyzer').should('have.length', 0)
    cy.get('.fa-play').should('have.length', 2)
    cy.get('.fa-play').first().click()
    cy.get('.fa-play').should('have.length', 0)
    cy.get('.fa-pause').should('have.length', 2)
    cy.get('#vueAudioMotionAnalyzer').should('have.length', 1)
    cy.get('.fa-pause').last().click()
    cy.get('#vueAudioMotionAnalyzer').should('have.length', 0)
  })
})