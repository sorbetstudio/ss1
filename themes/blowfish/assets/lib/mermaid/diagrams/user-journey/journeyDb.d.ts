export function clear(): void;
export function addSection(txt: any): void;
export function getSections(): any[];
export function getTasks(): any[];
export function addTask(descr: any, taskData: any): void;
export function addTaskOrg(descr: any): void;
declare namespace _default {
    export function getConfig(): import("../../config.type.js").JourneyDiagramConfig | undefined;
    export { clear };
    export { setDiagramTitle };
    export { getDiagramTitle };
    export { setAccTitle };
    export { getAccTitle };
    export { setAccDescription };
    export { getAccDescription };
    export { addSection };
    export { getSections };
    export { getTasks };
    export { addTask };
    export { addTaskOrg };
    export { getActors };
}
export default _default;
import { setDiagramTitle } from '../common/commonDb.js';
import { getDiagramTitle } from '../common/commonDb.js';
import { setAccTitle } from '../common/commonDb.js';
import { getAccTitle } from '../common/commonDb.js';
import { setAccDescription } from '../common/commonDb.js';
import { getAccDescription } from '../common/commonDb.js';
declare function getActors(): any[];
