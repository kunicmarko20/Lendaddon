import ReleasePageExecutor from './ReleasePageExecutor';
import SupportsExecutor from '../SupportsExecutor';
import ElementFinder from "../finder/ElementFinder";
import CommitMessagesToTicketsTransformer from "./CommitMessagesToTicketsTransformer";
import TicketNameExtractor from "../TicketNameExtractor";

const executor = new SupportsExecutor(
    new ReleasePageExecutor(
        new ElementFinder(),
        new CommitMessagesToTicketsTransformer(
            new TicketNameExtractor()
        )
    )
);

executor.execute();
