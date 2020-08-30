import PouchDB from 'pouchdb';
import { battleDux } from '@aotds/aotds-battle';

type Config = {
    pouch_root: string;
}

export default class Battles {
    #pouch: any;

    constructor( config: Config ) {
        this.#pouch = new PouchDB(config.pouch_root, {
        adapter: 'leveldb',
    }); }


    async getBattle(battle_id: string) {
        const state = await this.#pouch.get(battle_id);
        return battleDux.createStore(state);
    }

    async createBattle(battle_id: string, initial_state: any) {
        const battle = battleDux.createStore();

        battle.dispatch(
            battle.actions.init_game(initial_state)
        );

        await this.#pouch.put({
            _id: battle_id,
            ...battle.getState(),
        });

        return battle;
    }

}
