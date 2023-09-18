import { view } from "./view.js";

export class MensagemView extends view<string> {

   template(model: string): string {
      return `
        <p class="alert alert-info">${model}</p>
        
        `
   }

}