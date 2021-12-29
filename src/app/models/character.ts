import { comics } from "./comics";
import { events } from "./events";
import { series } from "./series";
import { stories } from "./stories";
import { thumb } from "./thumb";
import { urls } from "./urls";

export class character {
id?: number;
name?: string;
description?: string;
modified?: Date;
resourceURI?: string;
urls?: [urls];
thumbnail?: thumb;
comics?: comics;
stories?: stories;
events?: events;
series?: series;
}
