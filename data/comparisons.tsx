import { Comparison } from './types';
import { ComparisonTable } from '@/components/ComparisonTable';

export const comparisons: Comparison[] = [
  {
    slug: 'hubspot-vs-salesforce',
    title: 'HubSpot vs Salesforce: Which CRM is Right for You?',
    description: "A detailed 2024 showdown between the two giants of the CRM world. We compare pricing, features, and ease of use.",
    date: '2024-03-20',
    productA: 'HubSpot',
    productB: 'Salesforce',
    content: (
      <>
        <h1 className="text-3xl font-bold mb-6">HubSpot vs Salesforce</h1>
        <p className="mb-6">
            Choosing between <strong>HubSpot</strong> and <strong>Salesforce</strong> is one of the most common dilemmas for growing businesses.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">At a Glance</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>HubSpot</strong>: Best for startups, scaling companies, and marketing-focused teams. Easier to use.</li>
            <li><strong>Salesforce</strong>: Best for large enterprises requiring infinite customization.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Feature Comparison</h2>
        <ComparisonTable
          productAName="HubSpot"
          productBName="Salesforce"
          rows={[
            { feature: "Starting Price", productA: "Free", productB: "$25/user/mo" },
            { feature: "Ease of Use", productA: "Excellent", productB: "Learning Curve" },
            { feature: "Implementation Time", productA: "Days", productB: "Months" },
            { feature: "Marketing Integration", productA: "Native", productB: "Pardot (Extra)" }
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4">The Verdict</h2>
        <p className="mb-6">
            If you want power <em>and</em> usability without hiring a dedicated admin, go with <strong>HubSpot</strong>. If you need a fully bespoke system and have the budget, <strong>Salesforce</strong> is the standard.
        </p>
      </>
    )
  },
  {
    slug: 'deel-vs-remote',
    title: 'Deel vs Remote: Leading Global Payroll Platforms',
    description: "Hiring internationally is complex. We break down the pricing (EOR vs Contractor), compliance features, and hidden fees of both platforms.",
    date: '2024-03-15',
    productA: 'Deel',
    productB: 'Remote',
    content: (
        <>
            <h1 className="text-3xl font-bold mb-6">Deel vs Remote</h1>
            <p className="mb-6">
                When building a global team, you need an Employer of Record (EOR) to handle the legal headache. <strong>Deel</strong> and <strong>Remote</strong> are the market leaders.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">At a Glance</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Deel</strong>: Faster onboarding, more payment options (crypto), and slightly better dashboard UI.</li>
                <li><strong>Remote</strong>: Owned entities in all countries (no 3rd parties), often cheaper for EOR in the long run.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">Feature Comparison</h2>
            <ComparisonTable
                productAName="Deel"
                productBName="Remote"
                rows={[
                    { feature: "Contractor Price", productA: "$49/mo", productB: "$29/mo" },
                    { feature: "EOR Price", productA: "Starts @ $599", productB: "Starts @ $599" },
                    { feature: "Owned Entities", productA: "Mixed model", productB: "100% Owned" },
                    { feature: "Payment Speed", productA: "Instant", productB: "Standard" }
                ]}
            />
             <h2 className="text-2xl font-bold mt-10 mb-4">The Verdict</h2>
            <p className="mb-6">
                Choose <strong>Deel</strong> if you prioritize speed and hiring contractors. Choose <strong>Remote</strong> if you want the security of 100% owned legal entities for full-time employees.
            </p>
        </>
    )
  },
  {
    slug: 'monday-vs-asana',
    title: 'Monday.com vs Asana: Project Management Showdown',
    description: "Two of the most colorful project management tools go head-to-head. Which one is better for creative teams vs technical teams?",
    date: '2024-03-10',
    productA: 'Monday',
    productB: 'Asana',
    content: (
         <>
            <h1 className="text-3xl font-bold mb-6">Monday.com vs Asana</h1>
            <p className="mb-6">
               Project management isn't one-size-fits-all. <strong>Monday.com</strong> focuses on highly visual workflows, while <strong>Asana</strong> excels at task structure and lists.
            </p>

             <h2 className="text-2xl font-bold mt-10 mb-4">Feature Comparison</h2>
            <ComparisonTable
                productAName="Monday.com"
                productBName="Asana"
                rows={[
                    { feature: "Best View", productA: "Table/Dashboard", productB: "List/Calendar" },
                    { feature: "Free Plan", productA: "Very Limited", productB: "Generous (15 users)" },
                    { feature: "Automations", productA: "Visual Builder", productB: "Rules System" },
                    { feature: "Target User", productA: "Sales/Marketing", productB: "Operations/Product" }
                ]}
            />
        </>
    )
  },
  {
    slug: 'notion-vs-clickup',
    title: 'Notion vs ClickUp: All-in-One Workspace Battle',
    description: "Can one tool really do it all? We compare the flexibility of Notion documents against the structured power of ClickUp tasks.",
    date: '2024-03-05',
    productA: 'Notion',
    productB: 'ClickUp',
    content: (
         <>
            <h1 className="text-3xl font-bold mb-6">Notion vs ClickUp</h1>
            <p className="mb-6">
               <strong>Notion</strong> is a blank canvas that became a database. <strong>ClickUp</strong> is a project manager that added docs. Where do you start?
            </p>
            
             <h2 className="text-2xl font-bold mt-10 mb-4">Comparison</h2>
             <ComparisonTable
                productAName="Notion"
                productBName="ClickUp"
                rows={[
                    { feature: "Primary Function", productA: "Wiki/Knowledge Base", productB: "Task Management" },
                    { feature: "Learning Curve", productA: "High", productB: "Medium" },
                    { feature: "Mobile App", productA: "Fast", productB: "Feature Heavy" },
                    { feature: "Docs", productA: "Best in class", productB: "Good enough" }
                ]}
            />
        </>
    )
  }
];
