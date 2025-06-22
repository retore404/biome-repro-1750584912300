/**
 * If possible, put your minimal reproduction in this file, but feel free to
 * create other files elsewhere in the project if necessary.
 *
 * Once you have a minimal reproduction, commit it and push it to a public
 * GitHub repo.
 */

// src/components/packageLevelFunc.ts exports `packageLevelFunction` as @package.
// src/components/index.ts imports `packageLevelFunction` and re-exports.
// Because of @package, it is expected that this index.ts can import `packageLevelFunction` from src/components/index.ts and cannnot import it from src/components/packageLevelFunc.ts.

// This doesn't gives a lint error (as expected)
//import { packageLevelFunction } from "./components/";

// This gives a lint error (as expected)
//import { packageLevelFunction } from "./components/packageLevelFunc";

// This doesn't give a lint error (as expected)
//import { packageLevelFunction } from "@/components/";

// This DOES NOT give a lint error (not as expected)
import { packageLevelFunction } from "@/components/";


const func = packageLevelFunction;
func();