import { Comics } from "./comics";
import { Events } from "./events";
import { Series } from "./series";
import { Stories } from "./stories";
import { Thumb } from "./thumb";
import { Urls } from "./urls";

export class Character {
id?: number;
name?: string;
description?: string;
modified?: Date;
resourceURI?: string;
urls?: [Urls];
thumbnail?: Thumb;
comics?: Comics;
stories?: Stories;
events?: Events;
series?: Series;
}
