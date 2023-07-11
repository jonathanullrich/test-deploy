(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{2430:function(e,n,s){Promise.resolve().then(s.bind(s,9862))},9862:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return P}});var t=s(9268),i=s(6006),r=s(5846),a=s.n(r);function o(e){return{...e}}s(8395);let l=e=>{let{children:n}=e;return(0,t.jsx)("div",{className:"info-box",children:n})};function c(e){let n=Object.assign({h2:"h2",p:"p",h3:"h3",strong:"strong",a:"a"},o(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Concepts"}),"\n",(0,t.jsx)(n.p,{children:"Before working further with BaSyx, let us briefly go over some of its core concepts."}),"\n",(0,t.jsx)(n.h3,{children:"Digital Twins"}),"\n",(0,t.jsx)(n.p,{children:'A Digital Twin is a "virtual model of a physical object or system that can be used to simulate the behavior of that object or system to better understand how it works in real life" (Siemens).'}),"\n",(0,t.jsx)(n.p,{children:"In Industry 4.0 a Digital Twin refers to a digital representation of an asset.\nAn asset can be anything of value, e.g., a maschine, a product, a process, that we might want to monitor digitally."}),"\n",(0,t.jsx)(l,{children:(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"Digital Twin"})," in Industry 4.0 represents an Asset (a maschine, a product, a process)."]})}),"\n",(0,t.jsx)(n.h3,{children:"Standardization"}),"\n",(0,t.jsx)(n.p,{children:"Standards help us use Digital Twins for Industry 4.0 more efficiently.\nWith an agreed-upon set of properties and operations for an asset (e.g., which data it offers and what an asset can do) we can define a reusable, vendor-independent interface to the digital twin."}),"\n",(0,t.jsxs)(n.p,{children:["The Asset Administration Shell (AAS) provides such a ",(0,t.jsx)(n.a,{href:"https://www.plattform-i40.de/IP/Redaktion/DE/Downloads/Publikation/Details_of_the_Asset_Administration_Shell_Part1_V3.pdf",children:"> standard"})," and is developed by many leading companies (such as Bosch, Festo, Siemens, Fraunhofer and many more)."]}),"\n",(0,t.jsx)(l,{children:(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.strong,{children:"Asset Administration Shell"})," is a standardized Digital Twin."]})}),"\n",(0,t.jsx)(n.h3,{children:"Middleware"}),"\n",(0,t.jsx)(l,{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BaSyx"})," is an open-source middleware to work with Asset Administration Shells."]})}),"\n"]})}var h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},o(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)};let d=e=>{let{src:n,alt:s}=e;return(0,t.jsx)("img",{src:n,alt:s})};var x=s(1634),p=s.n(x);s(1806),s(9670),s(8771),s(5198),s(1713);let j=e=>{let{language:n,children:s}=e,r=async()=>await navigator.clipboard.writeText(s);return(0,i.useEffect)(()=>{p().highlightAll()},[]),(0,t.jsxs)("div",{className:"code-block",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("button",{className:"code-language",children:n.charAt(0).toUpperCase()+n.slice(1)}),(0,t.jsx)("button",{onClick:r,className:"clipboard-btn",children:"Copy Code"})]}),(0,t.jsx)("pre",{children:(0,t.jsx)("code",{className:"language-".concat(n),children:s})})]})};function m(e){let n=Object.assign({h2:"h2",p:"p",em:"em",a:"a"},o(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Getting Started"}),"\n",(0,t.jsx)(n.p,{children:"To interact with BaSyx, use the > AAS Web UI, open the menu on the left and 'Connect' to 'http://localhost:4001/registry'."}),"\n",(0,t.jsx)(n.p,{children:"On the left you find an overview of the connected Asset Administration Shells. Click on 'Heater' to see the current temperature of the asset."}),"\n",(0,t.jsx)(d,{src:"/test.png",alt:"A diagram showing the different BaSyx software components"}),"\n","\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"TODO: Bild mit iFrame erstzen f\xfcr Interaktivit\xe4t"})}),"\n",(0,t.jsx)(n.p,{children:"You can set a new target temperature in UI or by making a call to the API:"}),"\n",(0,t.jsx)(j,{language:"javascript",children:"fetch(\n    'basyx.com/aasServer/shells/basyx.examples.oven/aas/submodels/temp/submodel/submodelElements/curr_temp/value', {\n    method: 'PUT',\n    headers: {\n        'Content-Type': 'application/json' // text/plain'\n    },\n    body: JSON.stringify(100) // '100'\n})"}),"\n",(0,t.jsxs)(n.p,{children:["You find other endpoints in the ",(0,t.jsx)(n.a,{href:"#rest-api-ref",children:"> REST API Reference"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Now you know how to read and write values in BaSyx! We provide a couple of Asset Administration Shells that you can read from and write to in the same way (",(0,t.jsx)(n.a,{href:"#examples",children:"> Examples"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"Next, we show you how to set up your own Asset Administration Shells to build your project!"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"TODO: gehostete Infrastruktur einf\xfcgen, Beispiel anpassen -> Ausblick auf weitere Beispiele"})})]})}var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},o(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(m,e)})):m(e)};function f(e){let n=Object.assign({h2:"h2",p:"p"},o(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Work Flow"}),"\n",(0,t.jsx)(n.p,{children:"A typical workflow for using BaSyx is made up of four steps.\nFirst, you create an asset administration shell (step 1), you upload it to the BaSyx server (step 2), you connect the asset to an asset administration shell (step 3) to be able to read properties and execute operations of the asset (step 4)."}),"\n",(0,t.jsx)(n.p,{children:"This can be done via the API or via an SDK."})]})}var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},o(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)};let A=e=>{let{src:n}=e;return(0,t.jsx)("iframe",{className:"youtube-video",src:n,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})};function y(e){let n=Object.assign({p:"p",em:"em",h3:"h3",strong:"strong",ul:"ul",li:"li",h4:"h4",a:"a",code:"code"},o(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: Working with the API is easier to get started but lacks some features compared to a SDK such as data streaming and subscriptions (e.g., MQTT)."})}),"\n",(0,t.jsx)(n.h3,{children:"1) Create an Asset Administration Shell"}),"\n",(0,t.jsx)(n.p,{children:"A Asset Administration Shell has a standardized format with the following hierachy:"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Asset Administration Shell"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The Asset Administration Shell represents the topmost layer"}),"\n",(0,t.jsx)(n.li,{children:"It describes the asset that is digitized and holds submodels of the asset"}),"\n",(0,t.jsx)(n.li,{children:"Each asset administration shell must have an Uniform Resource Name (URN)"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Submodels"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Represent modular units that define specific aspects of the Asset Administration Shell"}),"\n",(0,t.jsx)(n.li,{children:"Use submodels to split the asset in self-contained parts"}),"\n",(0,t.jsx)(n.li,{children:"Each submodel must have an Uniform Resource Name (URN)"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Submodel Elements"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Are the individual building blocks or data elements that constitute a Submodel"}),"\n",(0,t.jsx)(n.li,{children:"Submodel Elements only need a short Id"}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"Here's how a simple Asset Administration Shell looks like for our heater example."}),"\n",(0,t.jsx)(j,{language:"json",children:'{\n    "conceptDictionary": [],\n    "identification": {\n        "idType": "Custom",\n        "id": "basyx.examples.test"\n    },\n    "idShort": "test",\n    "dataSpecification": [],\n    "modelType": {\n        "name": "AssetAdministrationShell"\n    },\n    "asset": {\n        "identification": {\n            "idType": "Custom",\n            "id": "basyx.examples.OvenAsset"\n        },\n        "idShort": "OvenAsset",\n        "kind": "Instance",\n        "dataSpecification": [],\n        "modelType": {\n            "name": "Asset"\n        },\n        "embeddedDataSpecifications": []\n    },\n    "embeddedDataSpecifications": [],\n    "views": [],\n    "submodels": []\n}'}),"\n",(0,t.jsx)(n.p,{children:"TODO: Add a minimal JSON AAS file showing hierachy and submodels."}),"\n",(0,t.jsx)(n.h4,{children:"AASX Package Explorer"}),"\n",(0,t.jsxs)(n.p,{children:["This video shows you how to create an Asset Administration Shell with the ",(0,t.jsx)(n.a,{href:"https://github.com/admin-shell-io/aasx-package-explorer",children:"> AASX Package Explorer"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note: The AASX Package Explorer only exists for Windows.\nFor Linux and Mac you can use the ",(0,t.jsx)(n.a,{href:"https://github.com/rwth-iat/aas_manager",children:"> AAS Manager"}),"."]})}),"\n",(0,t.jsx)(A,{src:"https://www.youtube-nocookie.com/embed/nGRNg0sj1oY?start=74"}),"\n",(0,t.jsx)(n.h3,{children:"2) Upload an Asset Administration Shell"}),"\n",(0,t.jsx)(n.p,{children:"In a second step we upload the Asset Administration Shell we just created to the BaSyx server."}),"\n",(0,t.jsx)(n.p,{children:"You can do this by posting to the API endpoint:"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST /aasServer/shells/aasx"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"content type: multipart/form-data"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"body: <.aasx file>"})})]}),"\n",(0,t.jsx)(n.h3,{children:"3) Connect an Asset"}),"\n",(0,t.jsx)(n.p,{children:"Now that we have uploaded the Asset Administration Shell to the server, we know what to expect when interacting with our asset.\nBut we haven't connected any asset to the Asset Administration Shell yet, so there won't be much to interact with!\nSo let's connect our first asset."}),"\n",(0,t.jsxs)(n.p,{children:["To connect an asset simply use the ",(0,t.jsx)(n.a,{href:"#rest-api-ref",children:"REST API"})," as well! Post the data your asset generates to the Asset Administration Shell server directly via:"]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"PUT aasServer/shells/basyx.examples.oven/aas/submodels/temp/submodel/submodelElements/curr_temp/value"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"content type: application/json"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"body: <.aasx file>"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: As this is a hackathon we encourage you to mock any kind of date you don't have!"})}),"\n",(0,t.jsx)(n.h3,{children:"4) Access Properties and Execute Operations"}),"\n",(0,t.jsx)(n.p,{children:"Once you have everything wired up, it's time to do something with the asset."}),"\n",(0,t.jsxs)(n.p,{children:["To access the assets properties again simply call the respective ",(0,t.jsx)(n.a,{href:"#rest-api-ref",children:"REST API"})," endpoints of the submodel elements:"]}),"\n",(0,t.jsx)(l,{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET aasServer/shells/basyx.examples.oven/aas/submodels/temp/submodel/submodelElements/curr_temp/value"})})}),"\n",(0,t.jsx)(n.p,{children:"You can invoke operations also via the API:"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST aasServer/shells/basyx.examples.oven/aas/ submodels/temp/submodel/submodelElements/setTargetTemp/invoke"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"content type: raw"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"body: <JSON content>"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: If you want to subscribe to data changes, the stateless nature of REST does not allow for this. Use a SDK here."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:['Note: In a real world example connecting an asset to an Asset Administration Shell can can be quite complex.\nFor this BaSyx offers Data Bridges to "bridge" between different data formats of the asset and the BaSyx server and to enable other capabilities.\nFor our hackathon using a DataBridge is probably out of scope, if you however need (or want) to tinker around with transformations read more about ',(0,t.jsx)(n.a,{href:"https://wiki.eclipse.org/BaSyx_/_Documentation_/_Components_/_DataBridge",children:"> Data Bridges"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["From here you on you know how to work with BaSyx and you can start thinking about the ",(0,t.jsx)(n.a,{href:"/#challenge",children:"challenge"}),"!"]})]})}var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},o(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(y,e)})):y(e)};function b(e){let n=Object.assign({p:"p",em:"em",a:"a",h3:"h3"},o(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note: We show you how to use the ",(0,t.jsx)(n.a,{href:"https://github.com/eclipse-basyx/basyx-java-server-sdk",children:"Java SDK"}),".\nThere are also SDKs for ",(0,t.jsx)(n.a,{href:"https://github.com/eclipse-basyx/basyx-python-sdk",children:"Python"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/eclipse-basyx/basyx-dotnet-applications",children:"C#"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/eclipse-basyx/basyx-rust-sdk",children:"Rust"}),"."]})}),"\n",(0,t.jsx)(n.h3,{children:"1) Create an Asset Administration Shell"}),"\n","\n",(0,t.jsx)(n.p,{children:"We can create a minimal Asset Administration Shell with the Java SDK as follows:"}),"\n",(0,t.jsx)(j,{language:"java",children:'// Create a Uniform Resource Name (URN)\nModelUrn aasURN = new ModelUrn("urn:org.eclipse.basyx:OvenAAS");\n\n// Create an asset\nAsset asset = new Asset("ovenAsset", aasURN, AssetKind.INSTANCE);\n\n// Create the Asset Administration Shell\nAssetAdministrationShell aas = new AssetAdministrationShell("oven", aasURN, asset);\n\n// Create a descriptor for the Asset Administration Shell\nAASDescriptor aasDescriptor = new AASDescriptor(aas, "http://localhost:4001/aasServer");'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"TODO: what to import to use Java SDK/ Maven etc..."})}),"\n",(0,t.jsx)(n.h3,{children:"2) Upload an Asset Administration Shell"}),"\n",(0,t.jsx)(n.p,{children:"To upload the Asset Administration Shell we simply create a copy on the server."}),"\n",(0,t.jsx)(j,{language:"java",children:'ConnectedAssetAdministrationShellManager manager = \n    new ConnectedAssetAdministrationShellManager(registry, new HTTPConnectorFactory());\n\nmanager.createAAS(aas, "http://localhost:4001/aasServer");'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"TODO: Add correct code snippets"})}),"\n",(0,t.jsx)(n.h3,{children:"3) Connect an Asset"}),"\n",(0,t.jsx)(n.p,{children:"Now that we have uploaded the Asset Administration Shell to the server, we know what to expect when interacting with our asset.\nBut we haven't connected any asset to the Asset Administration Shell yet, so there won't be much to interact with!\nSo let's connect our first asset."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Note: As this is a hackathon we encourage you to mock any kind of date you don't have!"})}),"\n",(0,t.jsx)(n.p,{children:"To connect an asset simply use add logic to access or mock data. For example:"}),"\n",(0,t.jsx)(n.h3,{children:"4) Access Properties and Execute Operations"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"TODO: Work Flow mit Java"})})]})}var w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},o(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(b,e)})):b(e)};function v(e){let n=Object.assign({h2:"h2",p:"p",em:"em",h3:"h3"},o(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:"For your inspiration we provide a couple of examples and Asset Administration Shells to get data from."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:'TODO: Heater Beispiel davor behandeln, hier weitere Endpunkte und Beispiele aufzeigen -> "M\xe4chtigkeit" von BaSyx aufzeigen'})}),"\n",(0,t.jsx)(n.h3,{children:"XY Example"}),"\n",(0,t.jsx)(n.p,{children:"Access via API: ..."}),"\n",(0,t.jsx)(n.p,{children:"Code: ..."})]})}var k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},o(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(v,e)})):v(e)};function _(e){let n=Object.assign({h2:"h2",p:"p",a:"a",strong:"strong",ul:"ul",li:"li"},o(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Architecture"}),"\n",(0,t.jsxs)(n.p,{children:["The aspect of ",(0,t.jsx)(n.a,{href:"#concepts",children:"Standardization"})," is further implemented in the BaSyx architecture.\nBaSyx serves as a middleware for Industry 4.0 and abstracts from different communication protocolls.\nThe BaSyx infrastructure is made up of several components."]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"BaSyx Components"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://wiki.eclipse.org/BaSyx_/_Documentation_/_Components_/_AAS_Server",children:"AAS Server"}),":"]}),"\n"]}),(0,t.jsx)(n.p,{children:"Acts as the connecting layer of the BaSyx Middleware for assets and asset administration shells."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://wiki.eclipse.org/BaSyx_/_Documentation_/_Components_/_Registry",children:"AAS Registry"}),":"]}),"\n"]}),(0,t.jsx)(n.p,{children:"Serves as a look-up table for decentralized AAS Servers."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://wiki.eclipse.org/BaSyx_/_Documentation_/_Components_/_DataBridge",children:"DataBridge"}),":"]}),"\n"]}),(0,t.jsx)(n.p,{children:"Supports integrating various protocols with Asset Administration Shells. Offers data transformation and other capabilities."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://wiki.eclipse.org/BaSyx_/_Documentation_/_Components_/_AAS_Web_UI",children:"AAS Web UI"})}),"\n"]}),(0,t.jsx)(n.p,{children:"Offers a interface to interact with Asset Administration Shells."})]}),"\n",(0,t.jsx)(d,{src:"/BaSyxArchitecture.png",alt:"A diagram showing the different BaSyx software components"})]})}var O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},o(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(_,e)})):_(e)};function T(e){let n=Object.assign({h2:"h2",p:"p",a:"a"},o(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Self-Hosting"}),"\n",(0,t.jsxs)(n.p,{children:["You can host the BaSyx Infrastructure on your maschine with ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"Docker"}),'.\nPaste the following contents into a file "docker-compose.yml" and run "docker-compose up" in the folder containing the file to start the services.\nFor more information on hosting the BaSyx infrastructure visit the official ',(0,t.jsx)(n.a,{href:"",children:"Eclipse BaSyx docs"}),"."]}),"\n",(0,t.jsx)(j,{language:"yaml",children:'# docker-compose.yml\nservices:\n\n  registry:\n    image: eclipsebasyx/aas-registry:1.4.0\n    container_name: example-registry\n    ports:\n        - 4000:4000\n    environment:\n        - basyxregistry_registry_backend=InMemory\n        - basyxcontext_contextpath=/registry\n        - basyxcontext_contextport=4000\n        - basyxcontext_accesscontrolalloworigin=*\n\n  aas:\n    image: eclipsebasyx/aas-server:1.5.0-SNAPSHOT\n    container_name: example-aas\n    ports:\n        - 4001:4001\n    environment:\n        - basyxaas_registry_path=http://registry:4000/registry/\n        - basyxaas_aas_backend=InMemory\n        - basyxcontext_contextpath=/aasServer\n        - basyxcontext_contextport=4001\n        - basyxaas_aas_source=aasx/01_Festo.aasx\n        - waiting_for=[{"host":"registry","port":"4000"}]\n        - basyxcontext_accesscontrolalloworigin=*\n\n  gui: \n    image: eclipsebasyx/aas-gui:v230403\n    container_name: example-aasGui \n    ports:\n        - 3000:3000'})]})}var D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},o(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(T,e)})):T(e)};let E=e=>{let{fileUrl:n,fileName:s}=e,i=()=>{let e=document.createElement("a");e.href=n,e.download=s,e.click()};return(0,t.jsx)("button",{onClick:i,className:"file-download-btn",children:s})};function B(e){let n=Object.assign({h2:"h2",p:"p",strong:"strong",ul:"ul",li:"li",code:"code"},o(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"REST API Reference"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"API Endpoints"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Get all Asset Administration Shells:"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET /aasServer/shells"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Get a specific Asset Administration Shell:"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET /aasServer/shells/<AAS URN>/aas"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Upload a Asset Administration Shells as .aasx File:"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"POST /aasServer/shells/aasx"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"content type: multipart/form-data"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"body: <.aasx file>"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Upload a Asset Administration Shells as JSON:"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"PUT /aasServer/shells/<AAS URN>"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"content type: raw"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"body: <JSON content>"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Delete a specific Asset Administration Shell"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"DELETE /aasServer/shells/<AAS URN>"})}),(0,t.jsx)(n.p,{children:"TODO: Add endpoints for submodels/ submodel elements"})]}),"\n",(0,t.jsx)(n.p,{children:"Download the BaSyx Postman collection to try out the different endpoints."}),"\n",(0,t.jsx)(E,{fileUrl:"/BaSyx_REST.json",fileName:"> Postman Collection"})]})}var N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},o(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(B,e)})):B(e)};function C(e){let n=Object.assign({h2:"h2",p:"p"},o(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Java SDK Reference"}),"\n",(0,t.jsx)(n.p,{children:"TODO"}),"\n",(0,t.jsx)(n.p,{children:"Create Asset Administration Shell"}),"\n",(0,t.jsx)(n.p,{children:"Add a submodel"}),"\n",(0,t.jsx)(n.p,{children:"Upload Asset Administration Shell to server"}),"\n",(0,t.jsx)(n.p,{children:"Export asset administration shell"})]})}var I=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},o(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(C,e)})):C(e)},P=function(){let[e,n]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=()=>{let e=document.querySelectorAll("section"),n=document.querySelectorAll("li"),s=window.pageYOffset||document.documentElement.scrollTop;e.forEach((e,t)=>{let i=e.offsetTop,r=e.offsetHeight;s>=i-175&&s<i-175+r?n[t].classList.add("active"):n[t].classList.remove("active")})};return window.addEventListener("scroll",e),document.querySelectorAll("li")[0].classList.add("active"),()=>{window.removeEventListener("scroll",e)}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("nav",{children:[(0,t.jsx)(a(),{href:"/",target:"self",children:(0,t.jsx)("img",{src:"/basyxhack-logo.png",alt:"BaSyx Hackathon Logo",id:"docs-basyx-logo"})}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"#gettingstarted",target:"self",children:"Getting Started"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"#concepts",target:"self",children:"Concepts"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"#workflow",target:"self",children:"Work Flow"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"#examples",target:"self",children:"Examples"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"#selfhosting",target:"self",children:"Self-Hosting"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"#architecture",target:"self",children:"Architecture"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"#rest-api-ref",target:"self",children:"REST API Reference"})}),(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"#java-sdk-ref",target:"self",children:"Java SDK Reference"})})]})]}),(0,t.jsx)("h1",{children:"BaSyx Hack Docs"}),(0,t.jsxs)("section",{id:"gettingstarted",children:[(0,t.jsx)(u,{}),(0,t.jsx)("hr",{})]}),(0,t.jsxs)("section",{id:"concepts",children:[(0,t.jsx)(h,{}),(0,t.jsx)("hr",{})]}),(0,t.jsxs)("section",{id:"workflow",children:[(0,t.jsx)(g,{}),(0,t.jsxs)("div",{className:"select-workflow",children:[(0,t.jsx)("button",{className:"custom-btn"+(e?" active":""),onClick:()=>n(!0),children:"Work with the REST API"}),(0,t.jsx)("button",{className:"custom-btn"+(e?"":" active"),onClick:()=>n(!1),children:"Work with the Java SDK"})]}),e?(0,t.jsx)(S,{}):(0,t.jsx)(w,{}),(0,t.jsx)("hr",{})]}),(0,t.jsxs)("section",{id:"examples",children:[(0,t.jsx)(k,{}),(0,t.jsx)("hr",{})]}),(0,t.jsxs)("section",{id:"selfhosting",children:[(0,t.jsx)(D,{}),(0,t.jsx)("hr",{})]}),(0,t.jsxs)("section",{id:"architecture",children:[(0,t.jsx)(O,{}),(0,t.jsx)("hr",{})]}),(0,t.jsx)("section",{id:"rest-api-ref",children:(0,t.jsx)(N,{})}),(0,t.jsx)("section",{id:"java-sdk-ref",children:(0,t.jsx)(I,{})})]})}},8395:function(){},1806:function(){}},function(e){e.O(0,[414,183,667,139,744],function(){return e(e.s=2430)}),_N_E=e.O()}]);