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

    async createBattle(initial_state: any) {
        const _id = initial_state.game.name;
        return this.#pouch.put({
            _id,
            ...initial_state,
        });
    }

}
