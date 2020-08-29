import PouchDB from 'pouchdb';

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
        return this.#pouch.get(battle_id);
    }

    async createBattle(battle_id: string, initial_state: any) {
        return this.#pouch.put({
            _id: battle_id,
            ...initial_state,
        });
    }

}
