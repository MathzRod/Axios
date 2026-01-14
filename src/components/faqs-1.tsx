import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

// Dados das perguntas
const questions = [
    {
        id: 'item-1',
        title: 'What is Efferd?',
        content:
            'Efferd is a collection of beautifully crafted Shadcn UI blocks and components, designed to help developers build modern websites with ease.',
    },
    {
        id: 'item-2',
        title: 'Who can benefit from Efferd?',
        content:
            'Efferd is built for founders, product teams, and agencies that want to accelerate idea validation and delivery.',
    },
    {
        id: 'item-3',
        title: 'What features does Efferd include?',
        content:
            'Efferd offers a collaborative workspace where you can design and build beautiful web applications, with reusable UI blocks, deployment automation, and comprehensive analytics all in one place. With Efferd, you can streamline your team’s workflow and deliver high-quality websites quickly and efficiently.',
    },
    {
        id: 'item-4',
        title: 'Can I customize components in Efferd?',
        content:
            'Yes. Efferd offers editable design systems and code scaffolding so you can tailor blocks to your brand and workflow.',
    },
    {
        id: 'item-5',
        title: 'Does Efferd integrate with my existing tools?',
        content:
            'Efferd connects with popular source control, design tools, and cloud providers to fit into your current stack.',
    },
    {
        id: 'item-6',
        title: 'How do I get support while using Efferd?',
        content:
            'You can access detailed docs, community forums, and dedicated customer success channels for help at any time.',
    },
    {
        id: 'item-7',
        title: 'How do I get started with Efferd?',
        content:
            'You can access detailed docs, community forums, and dedicated customer success channels for help at any time.',
    },
];

export function FaqsSection() {
    return (
        // Seção principal com padding e cor de fundo transparente (para se adequar ao fundo da página)
        <section className="py-24 sm:py-32">
            <div className="mx-auto w-full max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
                
                {/* Cabeçalho */}
                <div className="space-y-4 text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Perguntas Frequentes (FAQ)
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        Aqui estão algumas perguntas e respostas comuns que você pode encontrar ao usar Efferd. 
                        Se não encontrar a resposta, sinta-se à vontade para entrar em contato.
                    </p>
                </div>

                {/* Acordeão Estilizado (O Cartão principal) */}
                <Accordion
                    type="single"
                    collapsible
                    // Fundo escuro sutil, borda clara e sombra moderna
                    className="w-full rounded-xl border border-gray-700 bg-gray-900/50 shadow-2xl shadow-primary/10" 
                    defaultValue="item-1"
                >
                    {questions.map((item) => (
                        <AccordionItem
                            value={item.id}
                            key={item.id}
                            // Borda interna mais discreta
                            className="border-b border-gray-800 last:border-b-0"
                        >
                            <AccordionTrigger 
                                // Destaque para a pergunta, hover com a cor primária
                                className="px-6 py-5 text-left text-lg font-semibold text-gray-100 transition-colors hover:text-primary hover:no-underline"
                            >
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent 
                                // Texto da resposta suave
                                className="px-6 pb-5 text-base leading-relaxed text-gray-400"
                            >
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                
              
            </div>
        </section>
    );
}

export default FaqsSection;