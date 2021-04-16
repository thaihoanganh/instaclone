class ClassNames {
    private _prefix: string;
    private _modifiers: string[];
    private _className: string;

    constructor() {
        this._prefix = "";
        this._modifiers = [];
        this._className = "";
    }

    prefix(prefixValue: string) {
        this._prefix = prefixValue + "-";
        return this;
    }

    modifiers(...modifiersValue: (string | false | undefined)[]) {
        if (modifiersValue) {
            this._modifiers = modifiersValue.reduce<string[]>(
                (suffix, m) => (m ? [...suffix, m.trim()] : suffix),
                []
            );
        }
        return this;
    }

    add(classNameValue: string) {
        this._className = classNameValue.trim();
        return this;
    }

    create() {
        return [...this._modifiers.map((m) => this._prefix + m), this._className].join(" ");
    }
}
export default new ClassNames();
