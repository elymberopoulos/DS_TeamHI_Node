## Setting Up Implementations for Testing-
set up the testing locally as root to avoid problems. 




## Examples of usage:
When running the application.  The user will see a command prompt with 'help
```
Type 'help' if needed.
help
<< This is the help menu >>
VALID COMMANDS:
	add device, remove device, move device, manage device
	set timer, set schedule, show devices, show devices with state, cls, help, exit
```

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
help
# Exit:
```
"Exits the program"
```
