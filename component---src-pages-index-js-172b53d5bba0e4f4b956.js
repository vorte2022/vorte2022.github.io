"use strict";(self.webpackChunkvorte2022=self.webpackChunkvorte2022||[]).push([[678],{2450:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.AnchorLink=A;var l=o(t(7294)),a=t(5444),r=o(t(5697)),i=t(9650);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e){var n=e.to,t=e.title,r=e.children,o=e.className,s=e.stripHash,u=void 0!==s&&s,A=e.gatsbyLinkProps,d=void 0===A?{}:A,m=e.onAnchorLinkClick,E=u?i.handleStrippedLinkClick:i.handleLinkClick,p=c(c({},d),{},{to:u?(0,i.stripHashedLocation)(n):n,onClick:function(e){return E(n,e,m)}});return t&&(p.title=t),o&&(p.className=o),l.default.createElement(a.Link,p,r||t)}A.propTypes={to:r.default.string.isRequired,title:r.default.string,className:r.default.string,stripHash:r.default.bool,gatsbyLinkProps:r.default.object,onAnchorLinkClick:r.default.func,children:r.default.node}},9869:function(e,n,t){Object.defineProperty(n,"P",{enumerable:!0,get:function(){return l.AnchorLink}});var l=t(2450)},5881:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(7294),a=t(5444),r=t(9869);function i(){return l.createElement("header",null,l.createElement("div",{className:"navbar"},l.createElement(a.Link,{to:"/",className:"logo"},"VORTE 2022"),l.createElement("nav",null,l.createElement("ul",null,l.createElement("li",null,l.createElement(r.P,{to:"/#dates",title:"Important Dates",className:"stripped",stripHash:!0})),l.createElement("li",null,l.createElement(r.P,{to:"/#guidelines",title:"Submission Guidelines",className:"stripped",stripHash:!0})),l.createElement("li",null,l.createElement(r.P,{to:"/#organization",title:"Organization",className:"stripped",stripHash:!0})),l.createElement("li",null,l.createElement(r.P,{to:"/#previous",title:"Previous Editions",className:"stripped",stripHash:!0}))))))}var o=t(6125);function s(e){var n=e.children;return l.createElement("div",{className:"layout"},l.createElement(i,null),l.createElement(o.S,{className:"banner",src:"../images/banner.jpeg",alt:"Banner",layout:"fullWidth",placeholder:"blurred",aspectRatio:16/9,__imageData:t(7104)}),l.createElement("div",{className:"content"},n),l.createElement("footer",null,l.createElement("p",null,"Website created by Dr. Tiago Prince Sales and addapted by Pedro Paulo F. Barcelos and Mattia Fumagalli.")))}},7704:function(e,n,t){t.r(n),t.d(n,{default:function(){return r}});var l=t(7294),a=t(5881);function r(){return l.createElement(a.Z,null,l.createElement("section",null,l.createElement("div",null,l.createElement("h1",null," 11th International Workshop on Vocabularies, Ontologies and Rules for the Enterprise"),l.createElement("p",{className:"subtitle"},"In conjunction with the ",l.createElement("a",{href:"https://cbi2022.cs.vu.nl/"}," 24th IEEE International Conference on Business Informatics (CBI 2022)"),", Amsterdam, The Netherlands, 15–17 june 2022."),l.createElement("h2",null,"Call for papers"),l.createElement("h3",null,"About"),l.createElement("p",null,"The 11th International Workshop on Vocabularies, Ontologies and Rules for the Enterprise (VORTE 2021) is devoted to the topics of vocabularies, ontologies and rules in the context of enterprise systems. Examples of topics covered by VORTE include the development and adaptation of foundational, business and domain ontologies for the enterprise, the use of ontologies and rules in all aspects of enterprise modeling such as business process management and services, the enhancement of rules and services with formal semantics, and the evaluation of such systems and approaches."),l.createElement("p",null,"From the enterprise system development perspective, research topics are focused on relations of process modeling and execution languages with business ontologies and rules, and on how business ontologies and rules used in enterprise models are further propagated into technologies (e.g., linked data and semantic web) and architectures (e.g., service-oriented architectures) that enable collaboration between heterogeneous enterprise systems."),l.createElement("p",null,"The workshop also welcomes experience reports and empirical studies that are reporting on the use of ontologies and rules in the enterprise system development life-cycle."),l.createElement("h3",{id:"guidelines"},"Submission Guidelines"),l.createElement("p",null,"Submissions should describe original research ideas or contributions, present problems or challenges encountered in practice, or report on industrial cases and practices."),l.createElement("p",null,"All submissions MUST conform to the two-column format of IEEE conference proceedings (http://www2.computer.org/portal/web/cscps/formatting) and include the author's name, affiliation, and contact details."),l.createElement("p",null,"Papers must be submitted as PDF files using ",l.createElement("a",{href:"https://easychair.org/conferences/?conf=vorte2022"},"EasyChair on this submission link"),"."),l.createElement("h3",null,"Topics"),l.createElement("p",null,"Vocabularies and Ontologies for the enterprise:"),l.createElement("ul",null,l.createElement("li",null,"Ontology-driven representation of products, services, functionalities, design, processes;"),l.createElement("li",null,"Ontologies for expert knowledge;"),l.createElement("li",null,"Ontologies for corporate knowledge;"),l.createElement("li",null,"Foundational or upper-level ontologies in the enterprise;"),l.createElement("li",null,"Adaptation of ontologies for companies and organizations; ")),l.createElement("p",null,"Conceptual and Enterprise Modeling:"),l.createElement("ul",null,l.createElement("li",null,"Ontological Foundations for Conceptual Modeling and Meta-modeling;"),l.createElement("li",null,"Ontology Design and maintenance for Conceptual Model Integration; "),l.createElement("li",null,"Ontology-Based Conceptual Modeling Tools and Environments;"),l.createElement("li",null,"Ontologies and Enterprise Architecture Modeling;"),l.createElement("li",null,"Ontologies and Business Process Modeling;"),l.createElement("li",null,"Ontologies and Goal-Based Modeling;"),l.createElement("li",null,"Ontologies and Business Rules;"),l.createElement("li",null,"Ontologies and Capability and Motivation Modeling")),l.createElement("p",null,"Enterprise Semantic Interoperability:"),l.createElement("ul",null,l.createElement("li",null,"Web services and Semantic services"),l.createElement("li",null,"Composition and Modularity"),l.createElement("li",null,"Merging, Mapping and Alignment"),l.createElement("li",null,"Ontology Language Interoperability"),l.createElement("li",null,"Open linked data publishing and exploitation")),l.createElement("p",null,"Knowledge management:"),l.createElement("ul",null,l.createElement("li",null,"Ontology and ontological methodologies in knowledge management and integration;"),l.createElement("li",null,"Ontology engineering, learning and maintenance;"),l.createElement("li",null,"Ontology integration and alignment;"),l.createElement("li",null,"Ontology effectiveness and evaluation;")),l.createElement("p",null,"Case studies and Evaluation:"),l.createElement("ul",null,l.createElement("li",null,"Practical issues in using ontologies in enterprises"),l.createElement("li",null,"Real cases of successful/unsuccessful use of ontology in business"),l.createElement("li",null,"Migration from legacy systems to new ontology-driven systems")),l.createElement("h3",{id:"dates"},"Important Dates"),l.createElement("ul",null,l.createElement("li",null,"Abstract submission: April 10th, 2022"),l.createElement("li",null,"Paper submission: April 17th, 2022"),l.createElement("li",null,"Acceptance Notification: May 8th, 2022"),l.createElement("li",null,"Camera Ready Submission: May 15th, 2022"),l.createElement("li",null,"Workshop: June")),l.createElement("h3",{id:"organization"},"Workshop Chairs"),l.createElement("ul",null,l.createElement("li",null,"Mattia Fumagalli - Free University of Bozen-Bolzano, Italy"),"mattia.fumagalli [at] unibz.it",l.createElement("li",null,"Pedro Paulo Favato Barcelos - Free University of Bozen-Bolzano, Italy"),"pfavatobarcelos [at] unibz.it",l.createElement("li",null,"Giancarlo Guizzardi - Free University of Bozen-Bolzano, Italy"),"giancarlo.guizzardi [at] unibz.it"),l.createElement("h3",null,"Program Committee"),l.createElement("ul",null,l.createElement("li",null,"Andreas Opdahl - University of Bergen, Norway"),l.createElement("li",null,"Cristine Griffo - Free University of Bozen-Bolzano, Italy"),l.createElement("li",null,"Daniele Porello - Laboratory for Applied Ontology, ISTC-CNR, Italy"),l.createElement("li",null,"Fernanda Baião - PUC-Rio, Brazil"),l.createElement("li",null,"Florian Matthes - University of Munich, Germany"),l.createElement("li",null,"Frank Loebe - University of Leipzig, Germany"),l.createElement("li",null,"Frederik Gailly - Ghent University, Belgium"),l.createElement("li",null,"Hans Weigand - Tilburg University, Netherlands"),l.createElement("li",null,"Julio Cesar Nardi - Federal Institute of Espirito Santo, Brazil"),l.createElement("li",null,"Leo Obrst - (retired from) MITRE Corporation, USA"),l.createElement("li",null,"Luís Ferreira Pires - University of Twente, The Netherlands"),l.createElement("li",null,"Oscar Pastor - Polytechnic University of Valencia, Spain"),l.createElement("li",null,"Paul Johannesson - Stockholm University, Sweden"),l.createElement("li",null,"Renata Guizzardi - University of Twente, The Netherlands"),l.createElement("li",null,"Roberta Ferrario - Laboratory for Applied Ontology, ISTC-CNR, Italy"),l.createElement("li",null,"Sergio de Cesare - University of Westminster, UK"),l.createElement("li",null,"Stefano Borgo - Laboratory for Applied Ontology, Italy"),l.createElement("li",null,"Terry Roach - Capsifi, Australia"),l.createElement("li",null,"Tiago Prince Sales - Free University of Bozen-Bolzano, Italy")),l.createElement("h3",null,"Publication"),l.createElement("p",null,"Accepted papers will be published with a dedicated IEEE proceedings volume."),l.createElement("h3",null,"Contact"),l.createElement("p",null,"All questions about submissions should be emailed to vorte2022 [at] gmail.com"),l.createElement("h3",{id:"previous"},"Previous Editions"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://vorte2021.events.unibz.it/",target:"_blank",rel:"noreferrer"}," VORTE 2021"),", Gold Coast, Australia (virtual)"),l.createElement("li",null," VORTE 2017 (Québec City, Canada)"),l.createElement("li",null," VORTE 2013 (Vancouver, Canada)"),l.createElement("li",null," VORTE 2012 (Beijing, China)"),l.createElement("li",null," VORTE 2011 (Helsinki, Finland)"),l.createElement("li",null," VORTE 2010 (Vitória, Brazil)"),l.createElement("li",null," VORTE 2009 (Auckland, New Zealand)"),l.createElement("li",null," VORTE 2007 (Annapolis, US)"),l.createElement("li",null," VORTE 2006 (Hong Kong, China)"),l.createElement("li",null," VORTE 2005 (Twente, The Netherlands)")))))}},7104:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIFAwT/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGf0ztgmFA//8QAGxAAAgIDAQAAAAAAAAAAAAAAAQIAEQMSITH/2gAIAQEAAQUCsW+TYUsHh7EUEf/EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPwGBf//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAgEBPwG6r//EABsQAAIBBQAAAAAAAAAAAAAAAAABAhARITJB/9oACAEBAAY/ArpkeGyojJ//xAAaEAADAQEBAQAAAAAAAAAAAAAAAREhQTFh/9oACAEBAAE/IYpgXBaSTedLa7fT2MK0oU0//9oADAMBAAIAAwAAABCcz//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBRHIL/xAAXEQEBAQEAAAAAAAAAAAAAAAABACEx/9oACAECAQE/EABBnXb/xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhQTFR/9oACAEBAAE/EBmHuVveX5DYjTzvPsEoydorCKvPJezaCa/Ng+6n22f/2Q=="},"images":{"fallback":{"src":"/static/3504559bedc31dc800bd724a2414cc61/a764f/banner.jpg","srcSet":"/static/3504559bedc31dc800bd724a2414cc61/37bba/banner.jpg 750w,\\n/static/3504559bedc31dc800bd724a2414cc61/61c72/banner.jpg 1080w,\\n/static/3504559bedc31dc800bd724a2414cc61/d61e8/banner.jpg 1366w,\\n/static/3504559bedc31dc800bd724a2414cc61/a764f/banner.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/static/3504559bedc31dc800bd724a2414cc61/a66aa/banner.webp 750w,\\n/static/3504559bedc31dc800bd724a2414cc61/65dd5/banner.webp 1080w,\\n/static/3504559bedc31dc800bd724a2414cc61/4fad6/banner.webp 1366w,\\n/static/3504559bedc31dc800bd724a2414cc61/c512e/banner.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.5625}')}}]);
//# sourceMappingURL=component---src-pages-index-js-172b53d5bba0e4f4b956.js.map