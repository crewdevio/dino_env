/* base code from https://github.com/rubiin/deno-env */

export interface Config {
  path?: string;
  encoding?: string;
}

export type objectGen = {
  [name: string]: string;
}

const defaultPath = Deno.cwd() + "/.env";

const LINE_BREAK = /\r\n|\n|\r/;
const DECLARATION = /^\s*(\w+)\s*\=\s*(.*)?\s*$/;

function parse(source: string) {
  const lines = source.split(LINE_BREAK);
  return lines.reduce((vars: objectGen, line: string) => {
    if (!DECLARATION.test(line)) return vars;

    const [, name, value] = DECLARATION.exec(line)!;

    if (!value) vars[name] = "";
    else if (/^".*"$/.test(value))
      vars[name] = value.replace(/^\"(.*)\"$/, "$1").replace(/\\n/g, "\n");
    else vars[name] = value;

    return vars;
  }, {} as objectGen);
}

export function config({ path = defaultPath, encoding = "utf-8" }: Config = {}) {
  const encoder = new TextDecoder(encoding);
  const env = Deno.readFileSync(path);
  const entrie = encoder.decode(env);

  for (const [key, value] of Object.entries(parse(entrie))) {
    Deno.env.set(key, value);
  }
}