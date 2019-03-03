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

# Move Device:
```
move device

      Device key name?
       key
      What is the storage location name 'lights' or 'power strips'?
      power strips
```

# Show Devices:
```
show devices
				<<<<<<<< CURRENT DEVICES >>>>>>>>>
______________________________________________________________________
COLLECTION: 'lights': {123=devices.SmartLight@6e0be858}
COLLECTION: 'power strips': {}
----------------------------------------------------------------------
```
# Help:
```
what would you like to do? Type help ofr options
help
VALID COMMANDS
add device, switch power, remove device, move device
```
