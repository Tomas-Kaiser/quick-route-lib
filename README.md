# Quick Route Library

The Quick Route Library helps you complete partial addresses by leveraging the power of the TomTom API. Perfect for applications that need address validation and completion.

## Getting Started

### installation

To install the library, run:
`npm install quick-route`

## Quick use

### Import the Library

Import the library into your project:
`import { fuzzySearch } from 'quick-route'`

### API Key Setup

Set your TomTom API key in your environment variables. Create a .env file in the root of your project and add:

Add your `API_KEY={your_api_key}` for calling TomTom API.

## Usage

Here's an example of how to use the `fuzzySearch` function:

```JavaScript
import { fuzzySearch } from 'quick-route';

// Call the fuzzySearch function with a partial address
const completeAddress = await fuzzySearch('33 Ipswich Rd');

// Output the complete address
console.log(completeAddress);
```

## Configuration

Ensure you have your `.env` file configured with your API key:

`API_KEY=your_api_key`

Make sure to add your `.env` file to `.gitignore` to keep your API key secure:

```Text
.gitignore
.env
```
