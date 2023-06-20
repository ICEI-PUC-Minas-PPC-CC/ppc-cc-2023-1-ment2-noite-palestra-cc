import { ListEquipament } from "../components/ListEquipaments";
import MiniDrawer from "../components/MiniDrawer";




export function Equipamentos() {
    return (
        <div>
            <MiniDrawer>
                <ListEquipament />
            </MiniDrawer>
                
        </div>
    );
}