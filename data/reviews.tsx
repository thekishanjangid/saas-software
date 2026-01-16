import { Review } from './types';
import { QuickVerdict } from '@/components/QuickVerdict';
import { ComparisonTable } from '@/components/ComparisonTable';

export const reviews: Review[] = [
  {
    slug: 'monday',
    title: 'Monday.com Review: Is It The Best Project Management Tool?',
    description: "We tested Monday.com for 30 days. Here's our verdict on its flexibility, automations, and ease of use.",
    date: '2024-03-10',
    productName: 'Monday.com',
    rating: 4.5,
    summary: "Monday.com is a colorful, highly customizable work OS that adapts to almost any workflow. It's incredibly intuitive but can get expensive as you add more users and robust features.",
    pros: ["Visual and intuitive interface", "Powerful automation recipes", "Huge template library"],
    cons: ["Timeline view only on higher plans", "Mobile app is limited compared to desktop"],
    websiteUrl: 'https://monday.com',
    category: 'Project Management',
    content: (
      <>
        <h1 className="text-3xl font-bold mb-6">Monday.com Review</h1>
        <p className="mb-6">
          <strong>Monday.com</strong> markets itself as a Work OS, and frankly, it's one of the most flexible tools we've tested.
        </p>

        <QuickVerdict 
          productName="Monday.com"
          rating={4.5}
          summary="Monday.com is a colorful, highly customizable work OS that adapts to almost any workflow. It's incredibly intuitive but can get expensive as you add more users and robust features."
          pros={["Visual and intuitive interface", "Powerful automation recipes", "Huge template library"]}
          cons={["Timeline view only on higher plans", "Mobile app is limited compared to desktop"]}
          websiteUrl="https://monday.com"
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">Key Features</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Boards</strong>: The core of Monday.com. Manage tasks, projects, and even leads.</li>
          <li><strong>Dashboards</strong>: High-level view of your progress.</li>
          <li><strong>Automations</strong>: &quot;When status changes to Done, notify Manager.&quot; Simple and powerful.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Monday.com vs Asana</h2>
        <ComparisonTable
          productAName="Monday.com"
          productBName="Asana"
          rows={[
            { feature: "Free Plan", productA: "Up to 2 seats", productB: "Up to 15 seats" },
            { feature: "Gantt Charts", productA: "Standard Plan", productB: "Premium Plan" },
            { feature: "Time Tracking", productA: "Pro Plan", productB: "Integration required" },
            { feature: "Ease of Use", productA: "Very High", productB: "High" }
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">Final Thoughts</h2>
        <p className="mb-6">
          If you want a tool that looks good and works great, Monday.com is a top contender.
        </p>
      </>
    )
  },
  {
    slug: 'deel',
    title: 'Deel Review: The Best Global Payroll Solution?',
    description: "Is Deel the right choice for your international team? We test its payroll, compliance, and hiring features.",
    date: '2024-03-15',
    productName: 'Deel',
    rating: 4.8,
    summary: "Deel is the undisputed king of global payroll and compliance. While it can be pricey for small teams, its ease of use and automated compliance features make it worth every penny for growing companies.",
    pros: ["Excellent user interface", "Automated compliance for 150+ countries", "Fast contractor payouts"],
    cons: ["Can be expensive for small startups", "Support can be slow during peak times"],
    websiteUrl: 'https://www.deel.com',
    category: 'HR Software',
    content: (
      <>
        <h1 className="text-3xl font-bold mb-6">Deel Review</h1>
        <p className="mb-6">
          If you're hiring internationally, <strong>Deel</strong> is a name you've likely heard. But does it live up to the hype? In this review, we'll take a deep dive into its features.
        </p>

        <QuickVerdict 
          productName="Deel"
          rating={4.8}
          summary="Deel is the undisputed king of global payroll and compliance. While it can be pricey for small teams, its ease of use and automated compliance features make it worth every penny for growing companies."
          pros={["Excellent user interface", "Automated compliance for 150+ countries", "Fast contractor payouts"]}
          cons={["Can be expensive for small startups", "Support can be slow during peak times"]}
          websiteUrl="https://www.deel.com"
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">How Deel Works</h2>
        <p className="mb-4">Deel simplifies the complex process of hiring employees and contractors worldwide. It handles:</p>
        <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>Contracts</strong>: Create compliant contracts in minutes.</li>
            <li><strong>Documents</strong>: Collect tax forms automatically.</li>
            <li><strong>Payments</strong>: Pay everyone in their local currency with one click.</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">Pricing vs Competitors</h2>
        <ComparisonTable
          productAName="Deel"
          productBName="Remote"
          rows={[
            { feature: "Contractor Management", productA: "$49/mo", productB: "$29/mo" },
            { feature: "EOR Service", productA: "$599/mo", productB: "$599/mo" },
            { feature: "Own Entities", productA: "Yes", productB: "Yes" },
            { feature: "Same Day Payouts", productA: "Yes", productB: "No" }
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
        <p className="mb-6">
            For companies serious about global expansion, Deel is a no-brainer. Its robust platform saves countless hours of administrative work.
        </p>
      </>
    )
  },
  {
    slug: 'hubspot',
    title: 'HubSpot CRM Review: Powerful but Pricey?',
    description: "HubSpot is a giant in the CRM space. We review its free tools and premium hubs to see if it's worth the investment.",
    date: '2024-03-05',
    productName: 'HubSpot',
    rating: 4.7,
    summary: "HubSpot offers an unbeatable ecosystem for sales and marketing. The free CRM is generous, but the costs ramp up quickly as you move to paid tiers.",
    pros: ["Excellent free CRM offering", "All-in-one marketing & sales platform", "Extensive academy and support"],
    cons: ["Steep learning curve for advanced features", "Very expensive Enterprise plans"],
    websiteUrl: 'https://www.hubspot.com',
    category: 'CRM Software',
    content: (
      <>
        <h1 className="text-3xl font-bold mb-6">HubSpot CRM Review</h1>
        <p className="mb-6">
            <strong>HubSpot</strong> isn't just a CRM; it's a complete growth platform.
        </p>

        <QuickVerdict 
          productName="HubSpot"
          rating={4.7}
          summary="HubSpot offers an unbeatable ecosystem for sales and marketing. The free CRM is generous, but the costs ramp up quickly as you move to paid tiers."
          pros={["Excellent free CRM offering", "All-in-one marketing & sales platform", "Extensive academy and support"]}
          cons={["Steep learning curve for advanced features", "Very expensive Enterprise plans"]}
          websiteUrl="https://www.hubspot.com"
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">The Ecosystem</h2>
        <p className="mb-4">HubSpot is divided into &quot;Hubs&quot;:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Marketing Hub</strong>: Email automation, landing pages.</li>
            <li><strong>Sales Hub</strong>: Pipeline management, meeting scheduler.</li>
            <li><strong>Service Hub</strong>: Ticketing, knowledge base.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Comparison</h2>
        <ComparisonTable
          productAName="HubSpot"
          productBName="Salesforce"
          rows={[
            { feature: "Setup Time", productA: "Fast (Days)", productB: "Slow (Weeks/Months)" },
            { feature: "Free Tier", productA: "Robust", productB: "None" },
            { feature: "Customization", productA: "Moderate", productB: "Extreme" },
            { feature: "Learning Curve", productA: "Medium", productB: "Steep" }
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">Verdict</h2>
        <p className="mb-6">
            Start with the free tools. If you grow, HubSpot grows with you—just watch your budget.
        </p>
      </>
    )
  }
];
