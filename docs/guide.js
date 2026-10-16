var guide =
[
    [ "Overview", "index.html#autotoc_md0", null ],
    [ "Architecture", "index.html#autotoc_md1", null ],
    [ "Prerequisites", "index.html#autotoc_md2", null ],
    [ "Install", "index.html#autotoc_md3", [
      [ "As a submodule", "index.html#autotoc_md4", null ],
      [ "As an installed package", "index.html#autotoc_md5", null ],
      [ "Checking the version", "index.html#autotoc_md6", null ],
      [ "Build options", "index.html#autotoc_md7", null ]
    ] ],
    [ "Using it", "index.html#autotoc_md8", null ],
    [ "Brokers and accounts", "index.html#autotoc_md9", null ],
    [ "Documentation", "index.html#autotoc_md10", null ],
    [ "Acknowledgements", "index.html#autotoc_md11", null ],
    [ "Disclaimer", "index.html#autotoc_md12", null ],
    [ "Start here", "guide.html#autotoc_md53", null ],
    [ "Before you trust a number, or an account", "guide.html#autotoc_md54", null ],
    [ "Underneath", "guide.html#autotoc_md55", null ],
    [ "Architecture", "architecture.html", [
      [ "The layers", "architecture.html#autotoc_md22", null ],
      [ "The dependency rule, and the rule underneath it", "architecture.html#autotoc_md23", null ],
      [ "One <span class=\"tt\">Runner</span>, three configurations", "architecture.html#autotoc_md24", null ],
      [ "What happens to one bar", "architecture.html#autotoc_md25", null ],
      [ "Binding a broker", "architecture.html#autotoc_md26", null ],
      [ "Normalize the intersection, expose the difference", "architecture.html#autotoc_md27", null ],
      [ "Two numeric worlds, one gated boundary", "architecture.html#autotoc_md28", null ],
      [ "Where to go next", "architecture.html#autotoc_md29", null ]
    ] ],
    [ "Writing a strategy", "writing-a-strategy.html", [
      [ "The handlers", "writing-a-strategy.html#autotoc_md114", null ],
      [ "Several instruments at once: <span class=\"tt\">on_bars</span>", "writing-a-strategy.html#several-instruments", null ],
      [ "Emit a target, not an order", "writing-a-strategy.html#autotoc_md115", null ],
      [ "What the context gives you", "writing-a-strategy.html#autotoc_md116", null ],
      [ "Prices", "writing-a-strategy.html#autotoc_md117", null ],
      [ "Warm-up", "writing-a-strategy.html#autotoc_md118", null ],
      [ "Reaching a broker-specific feature", "writing-a-strategy.html#autotoc_md119", null ],
      [ "What you do not have to handle", "writing-a-strategy.html#autotoc_md120", null ]
    ] ],
    [ "Binding a broker", "binding-a-broker.html", [
      [ "Four umbrellas, and the line between them", "binding-a-broker.html#autotoc_md30", null ],
      [ "Running with no broker", "binding-a-broker.html#autotoc_md31", null ],
      [ "Setting the limits", "binding-a-broker.html#autotoc_md32", null ],
      [ "How finely a target is chased", "binding-a-broker.html#autotoc_md33", [
        [ "Three units, and why one share count is the weakest", "binding-a-broker.html#autotoc_md34", null ],
        [ "Two rules worth knowing", "binding-a-broker.html#autotoc_md35", null ],
        [ "What it does not do", "binding-a-broker.html#autotoc_md36", null ]
      ] ],
      [ "Binding a real broker", "binding-a-broker.html#autotoc_md37", null ],
      [ "What each broker will tell you about the account", "binding-a-broker.html#autotoc_md38", null ],
      [ "The rule that matters most", "binding-a-broker.html#autotoc_md39", null ],
      [ "What killing the process does, and does not do", "binding-a-broker.html#autotoc_md40", null ],
      [ "Order of operations", "binding-a-broker.html#autotoc_md41", null ],
      [ "Observing against a live session", "binding-a-broker.html#autotoc_md42", null ]
    ] ],
    [ "Market data", "market-data.html", [
      [ "Two conventions that prevent a silent lookahead", "market-data.html#autotoc_md56", null ],
      [ "The price grid is the library's own", "market-data.html#autotoc_md57", null ],
      [ "What differs between the brokers", "market-data.html#autotoc_md58", null ],
      [ "Two broker-specific behaviours worth knowing", "market-data.html#autotoc_md59", null ],
      [ "The calendar answers three states, not two", "market-data.html#autotoc_md60", null ],
      [ "Example", "market-data.html#autotoc_md61", null ],
      [ "Where to go next", "market-data.html#autotoc_md62", null ]
    ] ],
    [ "The analytics layer: two numeric worlds and four conventions", "analytics-conventions.html", [
      [ "Why there are two numeric types at all", "analytics-conventions.html#autotoc_md13", null ],
      [ "Convention 1: one gated boundary, and it is narrower outbound", "analytics-conventions.html#autotoc_md14", null ],
      [ "Convention 2: two kinds of absence, and every reduction masks both", "analytics-conventions.html#autotoc_md15", null ],
      [ "Convention 3: a result is as long as its input", "analytics-conventions.html#autotoc_md16", null ],
      [ "Convention 4: two numbers describe a window, and nothing is annualized for you", "analytics-conventions.html#autotoc_md17", null ],
      [ "Numerical choices that are not stylistic", "analytics-conventions.html#autotoc_md18", null ],
      [ "What this layer deliberately does not compute", "analytics-conventions.html#autotoc_md19", null ],
      [ "Where the numbers live", "analytics-conventions.html#autotoc_md20", null ],
      [ "What is single-owner, and where parallelism goes", "analytics-conventions.html#autotoc_md21", null ]
    ] ],
    [ "Reading a backtest honestly", "reading-a-backtest.html", [
      [ "What it is", "reading-a-backtest.html#autotoc_md63", null ],
      [ "The one guarantee worth relying on", "reading-a-backtest.html#autotoc_md64", null ],
      [ "What the fill model assumes", "reading-a-backtest.html#autotoc_md65", null ],
      [ "Quotes, and the one place a quote-driven replay differs from a quote-driven live run", "reading-a-backtest.html#autotoc_md66", null ],
      [ "What it does not model at all", "reading-a-backtest.html#autotoc_md67", null ],
      [ "A replay's clock visits bar ends only", "reading-a-backtest.html#autotoc_md68", null ],
      [ "What a replay says an account can do", "reading-a-backtest.html#autotoc_md69", null ],
      [ "The equity curve is one currency's", "reading-a-backtest.html#autotoc_md70", null ],
      [ "Costs, which are the most common way a backtest lies", "reading-a-backtest.html#autotoc_md71", null ],
      [ "Annualizing, and the trap in it", "reading-a-backtest.html#autotoc_md72", null ],
      [ "Absent figures mean something", "reading-a-backtest.html#autotoc_md73", null ],
      [ "Survivorship bias, which the engine cannot fix", "reading-a-backtest.html#autotoc_md74", null ],
      [ "Intraday", "reading-a-backtest.html#autotoc_md75", null ],
      [ "What to distrust first", "reading-a-backtest.html#autotoc_md76", null ]
    ] ],
    [ "Running a strategy live", "running-a-strategy-live.html", [
      [ "What the loop adds over <span class=\"tt\">feed</span>", "running-a-strategy-live.html#autotoc_md85", null ],
      [ "The three stops, and what each leaves you holding", "running-a-strategy-live.html#autotoc_md86", null ],
      [ "How to stop one, from outside", "running-a-strategy-live.html#autotoc_md87", null ],
      [ "The hierarchy that actually matters", "running-a-strategy-live.html#autotoc_md88", null ],
      [ "The trap: your supervisor's grace period", "running-a-strategy-live.html#autotoc_md89", null ],
      [ "The three gates that stop you trading, on purpose", "running-a-strategy-live.html#autotoc_md90", null ],
      [ "What the report says about orders that did not go out", "running-a-strategy-live.html#autotoc_md91", null ],
      [ "Did everything I asked for go out?", "running-a-strategy-live.html#autotoc_md92", [
        [ "The history a cold start reads", "running-a-strategy-live.html#autotoc_md93", null ]
      ] ],
      [ "The market phase, and what the loop needs to know it", "running-a-strategy-live.html#autotoc_md94", null ],
      [ "Poll failures are not send failures", "running-a-strategy-live.html#autotoc_md95", null ],
      [ "Asking the broker what the account can do", "running-a-strategy-live.html#autotoc_md96", [
        [ "An order nobody can account for stops the run", "running-a-strategy-live.html#autotoc_md97", null ]
      ] ],
      [ "Short positions", "running-a-strategy-live.html#autotoc_md98", null ],
      [ "What the broker says it charged you", "running-a-strategy-live.html#autotoc_md99", null ],
      [ "The portfolio exposure ceiling, and what it means by \"portfolio\"", "running-a-strategy-live.html#autotoc_md100", null ],
      [ "What this does not do yet", "running-a-strategy-live.html#autotoc_md101", null ],
      [ "Trying it without a broker", "running-a-strategy-live.html#autotoc_md102", null ]
    ] ],
    [ "Recovering after a crash", "recovering-after-a-crash.html", [
      [ "The sentence the whole thing rests on", "recovering-after-a-crash.html#autotoc_md77", null ],
      [ "Turning it on", "recovering-after-a-crash.html#autotoc_md78", null ],
      [ "What the file looks like", "recovering-after-a-crash.html#autotoc_md79", [
        [ "Reading it under pressure", "recovering-after-a-crash.html#autotoc_md80", null ]
      ] ],
      [ "The five verdicts", "recovering-after-a-crash.html#autotoc_md81", null ],
      [ "What matching can and cannot do", "recovering-after-a-crash.html#autotoc_md82", null ],
      [ "What this does not do yet", "recovering-after-a-crash.html#autotoc_md83", null ],
      [ "Trying it without a broker", "recovering-after-a-crash.html#autotoc_md84", null ]
    ] ],
    [ "The broker port", "broker-port.html", [
      [ "Order identity", "broker-port.html#autotoc_md103", null ],
      [ "Capabilities", "broker-port.html#autotoc_md104", null ],
      [ "Example", "broker-port.html#autotoc_md105", null ],
      [ "A market-data source that cannot trade", "broker-port.html#autotoc_md106", null ],
      [ "Where to go next", "broker-port.html#autotoc_md107", null ]
    ] ],
    [ "Talking to a broker directly", "broker-clients.html", [
      [ "Quote clients", "broker-clients.html#autotoc_md43", null ],
      [ "Account and holdings clients", "broker-clients.html#autotoc_md44", [
        [ "Credentials from files", "broker-clients.html#autotoc_md45", null ]
      ] ],
      [ "Order clients", "broker-clients.html#autotoc_md46", [
        [ "Ordering safety", "broker-clients.html#autotoc_md47", null ],
        [ "Order inquiries", "broker-clients.html#autotoc_md48", null ],
        [ "Order request dry-run", "broker-clients.html#autotoc_md49", null ],
        [ "Stop-limit orders", "broker-clients.html#autotoc_md50", null ],
        [ "Not supported yet", "broker-clients.html#autotoc_md51", null ]
      ] ],
      [ "Where to go next", "broker-clients.html#autotoc_md52", null ]
    ] ],
    [ "Transport and request pacing", "transport-and-pacing.html", [
      [ "Transport behaviour", "transport-and-pacing.html#autotoc_md108", null ],
      [ "Request pacing", "transport-and-pacing.html#autotoc_md109", null ],
      [ "Traffic classes", "transport-and-pacing.html#autotoc_md110", null ],
      [ "How the two brokers report a refusal", "transport-and-pacing.html#autotoc_md111", null ],
      [ "Reading the counters", "transport-and-pacing.html#autotoc_md112", null ],
      [ "Where to go next", "transport-and-pacing.html#autotoc_md113", null ]
    ] ]
];