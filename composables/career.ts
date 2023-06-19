import type { CareerStep } from '~~/types'

export function useCareer (): CareerStep[] {
  return [
    {
      client: 'Harmonics',
      contract: 'owner',
      date: '2023 - present',
      project: 'Harmonics.be',
      projectUrl: 'https://harmonics.be',
      role: 'ecstatic dance DJ & trancedance facilitator, event organizer, web developer',
      stack:
        'Vue 3, Nuxt 3, Nuxt Content, Netlify/Vercel',
      imageUrl: '/images/career/harmonics.png'
    },
    {
      client: 'Opgroeien / Kind & Gezin',
      contract: 'freelance via Cronos Public Services',
      date: '2019 - present',
      project: 'Governmental citizen portal',
      role: 'Senior Full Stack Java Developer',
      stack:
        'Java, Spring boot, Angular, Liferay, Docker, Kubernetes, Jenkins, DevOps, Sonar, JaCoCo',
      imageUrl: '/images/career/kindengezin.jpg'
    },
    {
      client: 'IDEWE',
      contract: 'freelance via Formica (Cronos)',
      date: '2018 - 2019',
      project: 'Customer Portal',
      role: 'Senior Full Stack Java Developer',
      stack: 'Java, Spring, Angular, Liferay',
      imageUrl: '/images/career/idewe.png'
    },
    {
      client: 'Kind & Gezin',
      contract: 'freelance via Formica (Cronos)',
      date: '2014 - 2017',
      project: 'Governmental citizen portal',
      role: 'Senior Full Stack Java Developer',
      stack:
        'Liferay 6.2 & Liferay 7, Spring MVC, Spring REST & Web Services, Spring Security, Angular, Ionic, JBoss, JIRA, BitBucket, Jenkins, Sonar',
      imageUrl: '/images/career/kindengezin.jpg'
    },
    {
      client: 'Colruyt',
      contract: 'freelance via Tata Consultancy Services',
      date: '2013',
      project: 'Dreambaby community portal',
      role: 'Lead Developer',
      stack:
        'WebSphere Portal, IBM Connections, Java EE, EJB3, REST, JSON, jQuery',
      imageUrl: '/images/career/colruyt.png'
    },
    {
      client: 'Van Marcke',
      contract: 'employee',
      date: '2010 - 2013',
      project: 'Van Marcke Employee Intranet Portal',
      role: 'WebSphere Portal Architect / Project Leader Intranet',
      stack:
        'Spring Portlet MVC, Lotus Web Content Management, WebSphere Portal, Lotus Quickr, Lotus Connections & WebSphere Commerce',
      imageUrl: '/images/career/vanmarcke.jpg'
    },
    {
      client: 'IBM',
      contract: 'employee',
      date: '2006 - 2010',
      project:
        'several projects: UZ Gent: customer portal, VDAB: career portal, European Commission: employment portal, Eandis: energy supplier integration project',
      role: 'WebSphere Portal & J2EE Developer',
      stack: 'WebSphere Portal, Lotus Web Content Management, Java EE, jQuery',
      imageUrl: '/images/career/ibm.jpg'
    },
    {
      client: 'UPM-Kymmene',
      contract: 'employee',
      date: '2003 - 2006',
      project: 'Online Paper Catalogue, Make-To-Stock Assistant',
      role: 'Java Software Engineer & Lead developer',
      stack:
        'Struts, Hibernate, EJB 2, XML, XSL, Lucene, dom4j, jdom, Oracle DB, jUnit.',
      imageUrl: '/images/career/upm.jpg'
    },
    {
      client: 'Atos Origin',
      contract: 'employee',
      date: '2000 - 2001',
      project: 'Procter & Gamble: Lotus Notes Intranet',
      role: 'Lotus Notes Developer',
      stack: 'Lotus Notes',
      imageUrl: '/images/career/atos.jpg'
    },
    {
      client: 'the e-Corporation',
      contract: 'employee',
      date: '1999 - 2000',
      project: 'Nashuatec, Daikin, etc',
      role: 'Lotus Notes Developer',
      stack: 'Lotus Notes'
    }
  ]
}
