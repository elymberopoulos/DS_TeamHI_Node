# Installation
Ensure you have Node.js installed and it's path has been set correctly. After cloning the project type "npm i" in the root
directory to install the dependencies for the project. The project's npm start, test and other scripts are at the bottom 
of this page. To run one type "npm run test" for example in the terminal.

## Setting Up Implementations for Testing-
set up the testing locally as root to avoid problems. 




## Examples of usage:
When running the application. The user will have the following options
# Add Device:
```
add device
				"What would you like to do? Type help for options?
        add device 
        Add 'light' or 'power strip' device?
        light 
        Device key name?
        key 
        What is the storage location name?
        storage
```

# Remove Device:
```
remove device
	Enter key of device to remove 
  key
  What is the storage location name 'lights' or 'power strips'?
  lights 
  
```
# Help:
```
what would you like to do? Type help ofr options
help
VALID COMMANDS
add device, switch power, remove device, move device
```
# Switch Power:
```
What would you like to do? Type help for options.
switch power
Device key name? 
key
What is the storage location name?
storage
```
# Exit: 
```
exits the program

```
# Running Tests 

### npm run test 

# Starting Program 

### npm run start 

# Booting Server 

### npm run server 

# Running Program in Development mode 

### npm run dev

# Project Abstract 

The project aims to simulate a variety of devices whilst maintaining its state within the server. We do this through the use of node data persistency, dynamically populating a sub-directory with the devices state thus avoiding a central point of failure.
