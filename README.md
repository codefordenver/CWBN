# cwbn
generated using Luminus version "2.9.12.52"
## Prerequisites
You will need
- Java
- [Leiningen][1] 2.0 or above
- sassc (on a Mac it can be installed with homebrew)
[1]: https://github.com/technomancy/leiningen
- For Windows users, follow the Prerequisite Setup below.
## Setup
- Create file at root called "dev-config.edn" and populate the following database connection information `{:database-url "jdbc:h2:./cwbn_dev.db"}`
- `lein repl`
- `(restart)`
- `(migrate)`
- exit lein repl (ctrl-d)
## Running
To start a web server for the application, run:
- `lein run`
- `lein figwheel` (can be started from a separate terminal)
## Prerequisite Setup for Windows Users
One of the crucial parts of efficient development for this project is **SassC**.  Unfortunately, **SassC** and **Windows** do not sit well together.  It is recommended to use **Ubuntu** system in a virtual environment.  The following instruction will guide you to set up the project in your Virtual Ubuntu System.
#### (1) Virtual Environment
- Oracle provides **VM VirtualBox** for free.  Please download and install the latest version from https://www.virtualbox.org/ , and follow the installation
#### (2) Ubuntu
- **Ubuntu** can be downloaded from https://www.ubuntu.com/download/desktop.  It will download an .iso image file, which will be used shortly.
#### (3) Ubuntu on VM VirtualBox
- Run VM VirtualBox.
- Click **'New'** at the top-left corner.
- **Name** your operating system, choose **Linux** for type, and select appropriate Ubuntu version (**Ubuntu 32-bit or 64 bit**), Next...
- Allocate **Memory Size** (No more than 50% of total), Next...
- Select **'Create a virtual hard disk now'**, Create...
- Choose **VDI (disk image)** for hard disk file type, Next...
- Choose **'Dynamically allocated'** for Storage, Next...
- Allocate between **10GB (minimum)** and 40~50GB(may be more or less) for File location and size, Create...
- Select your Ubuntu system (single click) and click on **'Settings'**.
- Under **'General'**, click on the **'Advanced'** tab, and set **'Shared Clipboard'** and **'Drag'n'Drop'** to **'Bidirectional'**.
- Under **'System'**, click on the **'Motherboard'** tab and allocate base memory to a number less than 50% of total, click on the **'Processor'** tab, and allocate less than 50% of total CPU.
- Under **'Storage'**, click on **'Empty'** under **"Controller: IDE"** and find **'Attributes'** on the right-hand side.  Click on the tiny disk icon and select **'Choose Virtual Optical Disk File...'**, and select the **ubuntu iso file** you downloaded earlier and click **'Open'**, then click **OK**.
- Start your ubuntu system by selecting it and pressing the green **Start** arrow.
- Select your Ubuntu system (single click) and click on **'Settings'**.
- Under **'General'**, click on the **'Advanced'** tab, and set **'Shared Clipboard'** and **'Drag'n'Drop'** to **'Bidirectional'**.
- Under **'System'**, click on the **'Motherboard'** tab and allocate base memory to a number less than 50% of total, click on the **'Processor'** tab, and allocate less than 50% of total CPU.
- Under **'Storage'**, click on **'Empty'** under **"Controller: IDE"** and find **'Attributes'** on the right-hand side.  Click on the tiny disk icon and select **'Choose Virtual Optical Disk File...'**, and select the **ubuntu iso file** you downloaded earlier and click **'Open'**, then click **OK**.
- Start your ubuntu system by selecting it and pressing the green **Start** arrow.
#### (4) Ubuntu Initial Setup
- Select your language of choice and click on **'Install Ubuntu'**.
- Select your keyboard layout, Continue...
- Select **'Normal Installation'**, **'Download updates while installing Ubuntu'**, **'Install third-party software...'**, and Continue...
- For the Installation Type, select **'Erase disk and install Ubuntu'**.  <**Please Note** this does not erease your windows or any other files you have in your computer.  This only applies to the current virtual environment you are in, which contains no previously installed files.> Click **'Install Now'**, and Continue...
- Choose your preferred location, Continue...
- Fill in your information, Continue...and wait for the installation process to be completed.
- Restart Now your Ubuntu.  If asked to remove the medium, press enter.
- Hopely you have a new UBUNTU system!
#### (5) Software Installation
Press **Ctrl+Alt+t** for terminal in Ubuntu
##### (a) Java
- If you have not installed Java or not sure if you have one, you can check by typing in **java -version** in terminal. If Java is already installed, you can skip to the section (b) Leiningen.  Otherwise follow these simple steps to install Java.
- In terminal, run the command below.
```sh
$ sudo apt install openjdk-8-jre-headless
```
- Check your java version by
```sh
$ java -version
```
##### (b) Leiningen
- Go to https://leiningen.org/#install
- Right click on the **'lein script'** link, choose 'Save **Link** As...', name it just **'lein'** and save...(Download folder should do)
- In your terminal, locate **/usr/local/bin** folder (``` $ cd /usr/local/bin ```). If it does not exists, create one by
```sh
$ sudo mkdir -p /usr/local/bin
```
- Move the lein link to that bin folder.
```sh
$ sudo mv ~/Downloads/lein* /usr/local/bin/lein
```
- Set the access right to the file.
```sh
$ chmod a+x /usr/local/bin/lein
```
- Set PATH to the file.
```sh
$ export PATH=$PATH:/usr/local/bin
```
- Install lein.
```sh
$ lein -version
```
- Test lein.
```sh
$ lein repl
```
- If you see ```user=>``` the installation is a success!  ```Ctrl + d``` to exit.
##### (c ) Git
- Install Git
```sh
$ sudo apt-get install git
```
- Check installation.
```sh
$ git --version
```
##### (d) Make
- Install Build-essential, which includes **Make**
```sh
$ sudo apt-get install build-essential
```
- Check installation
```sh
$ make --version
```
##### (e) SassC
- cd into ```/usr/local/lib``` folder.
- Clone sassc files.
```sh
/usr/local/lib$ sudo git clone https://github.com/sass/sassc.git --branch 3.2.1 --depth 1
```
- Clone libsass files.
```sh
/usr/local/lib$ sudo git clone https://github.com/sass/libsass.git --branch 3.2.1 --depth 1
```
- Edit environment file - first cd into **etc** folder ```cd /etc```.
- Edit the file using a text editor of your choice.  In this example, **Nano** is used.
```sh
/etc$ sudo nano environment
```
- In the second line of the file, add the following
```sh
SASS_LIBSASS_PATH="/usr/local/lib/libsass"
```
- Then save the file by ```Ctrl+o```, confirm the filename is "environment" and press enter.  ```Ctrl+x``` to exit Nano.
- Run the environment file once by
```sh
/etc$ source environment
```
- Test the path by
```sh
/etc$ echo $SASS_LIBSASS_PATH
```
- If you see ```/usr/local/lib/libsass``` in the line below the **echo** command, the **path** is set correctly.
- Cd into **SassC folder** and run **Make**
```sh
$ cd /usr/local/lib/sassc/
/usr/local/lib/sassc/$ sudo make
```
- Set a symbolic link and confirm by
```sh
$ cd /usr/local/bin/
/usr/local/bin$ sudo ln -s ../lib/sassc/bin/sassc sassc
/usr/local/bin$ sassc --version
```
- If you see the version numbers of sassc and libsass, your SassC installation is complete.
##### (* ) Possible file access issue after cloning the CWBN project files.
Ubuntu's owner and user may differ.  In such case, you may not have the write access to the files you cloned.
You must set the permission manually to allow editing the files.
In your project folder (which should include CWBN folder), type the following to set the access.  Please beware that this gives all access to everyone for the specified folder and all sub folders and files inside.
```sh
$ sudo chmod -R a+rwx /usr/local/{your-project-folder}
```

Copyright © 2018 FIXME
