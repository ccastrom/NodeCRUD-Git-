

=======
# [![My Skills](https://skillicons.dev/icons?i=git)](https://skillicons.dev) Git Fundamentals 

The main goal of this repository is to apply the basic Git commands in the versioning of a software project. Also, the use of 'pull requests' was employed to simulate collaborative work from another GitHub account

## :mag: Flow visualization

#### :camera:  Visual represantion of commits
![flow](https://github.com/ccastrom/NodeCRUD-Git-/assets/33319281/3cea5887-5e03-4e6a-a1c6-65f11079415e)

#### :movie_camera: Video showing the commit flow
https://github.com/ccastrom/NodeCRUD-Git-/assets/33319281/e26a9413-edac-42a7-8fcb-b3990328b239

## Branchs objectives
### :large_blue_circle: Main branch
The objective of the 'Main' branch is to establish an HTTP connection using 'express.js', perform package imports, refer to the vehicles endpoint, and merge the changes from the 'routes' secondary branch.

>(app.js)

### :black_circle: routes branch
The 'routes' branch has the function of performing basic operations for data manipulation:
* GET
* POST
* UPDATE
* DELETE

>(vehicle.js)
### :red_circle: Main branch (coolaborative account)
The user 'ccastrom2' is responsible for performing validations for the 'vehicles' route using 'joi'. Once each task is completed, a pull request is sent to the original project user for them to accept the changes.

>(validate.js, vehicles.js)

