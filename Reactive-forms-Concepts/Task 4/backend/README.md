
`Spring Version: ` 6.1.2

`Spring Boot Version: ` 3.2.1

---

## Run using Maven on command line

Use `mvn spring-boot:run`

If you are using java version less than 17, then do following on cmd (windows):

- SET JAVA_HOME=C:\Program Files\Java\jdk-21
- SET PATH=%JAVA_HOME%\bin;%PATH%

After doing above steps, now run 'mvn spring-boot;run'.

---

## Compiling and Running without build tools

- `dir /s /B *.java > sources.txt`  ==> `\s` means recursively search. `\B` means display in "bare" format.
The `sources.txt` file contains all jaav files of our project.

Download all JARS from mvnrepository.com and save them in lib folder present at the root of our project.

Now compile everything
- javac -cp ".\lib\*" -d .\bin @sources.txt
- java -cp "bin;lib/*;src/main/resources" com.portal.PortalApplication
---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).

