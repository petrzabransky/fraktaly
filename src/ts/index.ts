"use strict";

// Import Class 
import { Fractal } from "./modules/class/Fractal";
import { Tree } from "./modules/class/Tree";

// Import Components
import { nav } from "./modules/component/nav";


//
// Start app
//

// Init Components
nav();

// Create Fractal objects 
new Fractal("spiral");
new Tree("tree");
