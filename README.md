# Milsymbol-Showcase
 
This project should showcase the usage of the milsymbol library in an angular project.
The original project can be found here [Milsymbol](https://github.com/spatialillusions/milsymbol).

## Installation of Milsymbol
```
npm install milsymbol --save
```

## Usage/Implementation of Milsymbol
To use the milsymbol library we ne to import it into our component. 
In this case we imported it in our app.component.ts file.
We are using the following standard: MIL-STD-2525C, this should be imported.
```typescript
import std2525c from 'milsymbol';
```

In the HTML-File of the component we need to add an image tag:
```html
<img [src]="" alt="SVG Image"/>
```

In the TS-File add two properties: 
```typescript
symbolDataUrl: string | undefined;
svgBase64: string | undefined;
```

Now create a function that return a string. In this function we create a new Symbol as SVG and convert it to base64 string. This is done the following way:
```typescript
createMilsymbol(sic: string): string {
   const symbol = new std2525c.Symbol(sic, {
       size: 100,
       fill: true,
       frame: true,
       colorMode: "Dark",
   });
   
   const svgBase = 'data:image/svg+xml;base64,' + btoa(symbol.asSVG());
   
   return svgBase;
}
```

In the HTML-File set the soruce of the image to the function we created previously.
```html
<img [src]="createMilsymbol()" alt="SVG Image" />
```

To see a Symbol we need to add a parameter to the functiion. In our case we need to give the SIDC (Symbol identification code) to the function. 

#### Quick jump into military symbology.
What is a SIDC? 

``
A SIDC is a 15-character alphanumeric identifier that provides the information necessary to display or transmit a tactical symbol between
MIL-STD-2525 compliant systems.
``

What does each Character stand for?

``
Code positions. The positions of the SIDC are described below. Since many
symbols do not have an entry in every code position, a dash (-) is used to fill each unused position. An asterisk (*) indicates positions that are user-defined based on specific symbol circumstances, such as standard identity or echelon/mobility. Table A-I identifies the fields of information included in a SIDC and the position each occupies in the 15-character identifier. The values in each field are filled from left to right unless otherwise specified.
``

1. Position 1, coding scheme, indicates to which overall symbology set a symbol belongs.
2. Position 2, standard identity, indicates the symbol’s standard identity.
3. Position 3, battle dimension, indicates the symbol’s battle dimension.
4. Position 4, status, indicates the symbol’s planned or present status.
5. Positions 5 through 10, function ID, identifies a symbol’s function. Each position indicates an increasing level of detail and specialization.
6. Positions 11 and 12, symbol modifier indicator, identify indicators present on the symbol such as echelon, feint/dummy, installation, task force, headquarters staff, and equipment mobility. Table A-II contains the specific values used in this field.
7. Positions 13 and 14, country code, identifies the country with which a symbol is associated. Country code identifiers are listed in ISO 3166-1.
8. Position 15, order of battle, provides additional information about the role of a symbol in the operational environment. For example, a bomber that has nuclear weapons on board may be designated as strategic force related.

For possible characters please see this [document for MIL-STD-2525C](https://worldwind.arc.nasa.gov/milstd2525c/Mil-STD-2525C.pdf) as example.

As we now know how to create such a SIDC, we are able to give it to our previously created function:
```html
<img [src]="createMilsymbol('SFG--------N---')" alt="SVG Image" />
```

Now the preperations are made and we can start our application. 
Run the following command in a terminal:
```
ng serve
```

Open a new tab in your browser and got to the site that is now running.
And as you see there are four Symbols.
