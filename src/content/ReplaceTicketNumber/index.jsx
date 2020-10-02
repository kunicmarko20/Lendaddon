import ElementFinder from "../finder/ElementFinder";
import TicketNameExtractor from "../TicketNameExtractor";
import ReplaceTicketNumberExecutor from "./ReplaceTicketNumberExecutor";
import SupportsExecutor from "../SupportsExecutor";

const executor = new SupportsExecutor(
    new ReplaceTicketNumberExecutor(
        new ElementFinder(),
        new TicketNameExtractor()
    )
);
executor.execute();
