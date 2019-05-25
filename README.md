# many-faced

I dont know how to name this repo, let's use this `many face god` as the name temporarily.

This proj includes two parts, one is server the other one is frontend. 
The backend will generate how the UI looks like in json.
The frontend will generate components, which is by `React` according to the json from backend.

## Services

*Services* are used to generate UI components

### Page Service
`PageService` is used to generate pages in frontend, and if there are more than one pages, navigation related UI will also be generated.

`PageSerivce` is a UI components container in one page.

### Button
- Normal Button, html button or div which can be clicked.
- Image Button

### Image
Html image

### Input
Input accept one line text input

### Text Area
Input accept multiple line text input

### KeyValuePair
`KeyValuePair` is used to generate a pair with two components, like title and input, or input and button.

### Style
Simple styles are supported to set text **bold**, etc.

### Navigation
Navigate between pages. 

Methods:
- push
- pop
- popToRoot

## Notification

Notification in `WebSocket` or `Http2`.

Frontend shall change when notifications received.

## TODO
- [ ] Add actions in UI elements.


