import React from 'react';
import sortKeys from 'sort-keys';
import LineGraph from 'react-line-graph';
import classNames from 'classnames';
import { Box, ValueBox, Property, PropertyUnit } from '@/components/StatInfo';
import { localize } from '@/components/Locale';
import Container from '@/components/Container';
import { percent, sortValues, sepNumber } from '@/utils';
import Alert from '@/components/Alert';
import Markdown from '@/components/Markdown';
import { complexity, specificity, id_selectors_issues, issues, suggestions } from '@/content';

type TProps = {
    data: any;
    stats: any;
}

const Stats = ({ data, stats }: TProps) => {
    const lineOfCode = 15021;
    const specificityChart = {
        data       : stats.stats.selectors.specificity.graph,
        smoothing  : 0.7,
        accent     : 'black',
        fillBelow  : 'black',
        hover      : false,
        height     : '450px',
        compression: 0
    };

    return (
        <div className="container mx-auto my-10">
            {/* Overview */}
            <Container title={localize('sections.titles.overview')}>
                <div className="bg-black rounded-md p-8 grid grid-cols-5">
                    <Box title="File Size" value={`${Math.ceil(data.stylesheet.size / 1000)} KB`} white />
                    <Box title="Line of Codes" value={lineOfCode.toLocaleString()} white />
                    <Box title="Rules" value={data.rules.total.toLocaleString()} white />
                    <Box title="Selectors" value={data.selectors.total.toLocaleString()} white />
                    <Box title="Declarations" value={data.declarations.total.toLocaleString()} white />
                </div>
            </Container>

            {/* RuleSets */}
            <Container title={localize('sections.titles.ruleset')} has_section>
                <h3 className="text-xl font-bold mb-6">Selectors per RuleSet</h3>
                {sortValues(data.rules.selectors.unique).map((key: string[]) => {
                    return <ValueBox key={key[0]} name={key[0]} value={key[1]} total={data.rules.total} />;
                })}

                <h3 className="text-xl font-bold mt-12 mb-6">Declarations per RuleSet</h3>
                {sortValues(data.rules.declarations.unique).map((key: string[]) => {
                    return <ValueBox key={key[0]} name={key[0]} value={key[1]} total={data.rules.total} />;
                })}
            </Container>

            {/* Selectors */}
            <Container title={localize('sections.titles.selector')} has_section>
                <h3 className="text-xl font-bold mb-6">Overview</h3>
                <div className="flex items-center justify-start">
                    <div className="basis-3/4 bg-black rounded-md p-8 grid grid-cols-3 mr-2">
                        <Box title="Class Selector Total" value={data.selectors.total} white />
                        <Box title="Unique" value={data.selectors.totalUnique} white />
                        <Box title="U/T Ratio" value={percent(data.selectors.totalUnique, data.selectors.total)} white />
                    </div>
                    <div className="basis-1/4 bg-black rounded-md p-8 ml-2">
                        <Box title="ID Selector" value={data.selectors.id.total} white />
                    </div>
                </div>

                <h3 className="text-xl font-bold mt-12 mb-6">ID Selectors</h3>
                <div className="flex items-center justify-start">
                    <div className="basis-3/4 bg-black rounded-md p-8 grid grid-cols-3 mr-2">
                        <Box title="Total" value={data.selectors.id.total} white />
                        <Box title="Unique" value={data.selectors.id.totalUnique} white />
                        <Box title="U/T Ratio" value={percent(data.selectors.id.totalUnique, data.selectors.id.total)} white />
                    </div>
                    <div className="basis-1/4 flex-col flex ml-2">
                        {Object.keys(data.selectors.id.unique).map((i, idx) => <span className={classNames('bg-gray-300 rounded-md p-2', { 'mb-2': (idx < data.selectors.id.total - 1) })} key={i}>{i}</span>)}
                    </div>
                </div>
                <Alert title="Issues" is_warning className="mt-6">
                    <Markdown content={id_selectors_issues} />
                </Alert>

                <h3 className="text-xl font-bold mt-12 mb-6">Complexity</h3>
                <Alert title="What is the selector complexity?">
                    <Markdown content={complexity} />
                </Alert>
                {sortValues(data.selectors.complexity.unique).map((key: string[]) => {
                    return <ValueBox key={key[0]} name={key[0]} value={key[1]} total={data.selectors.total} />;
                })}

                <h3 className="text-xl font-bold mt-12 mb-6">Specificity</h3>
                <Alert title="What is the specificity?">
                    <Markdown content={specificity} />
                </Alert>
                {sortValues(data.selectors.specificity.unique).map((key: string[]) => {
                    return <ValueBox key={key[0]} name={key[0]} value={key[1]} total={data.selectors.total} />;
                })}

                <div className="flex items-center justify-start mt-6 mb-3">
                    <div className="basis-2/4 mr-2">
                        <h3 className="text-xl font-bold mt-6 mb-6">Specificity Graph</h3>
                        <p className="mb-3">Base 10 specificity score for each selector by source order. Generally, lower scores and flatter curves are better for maintainability.</p>
                    </div>
                    <div className="basis-1/4 bg-black rounded-md p-8 grid grid-cols-2 mr-2">
                        <Box title="Max" value={stats.stats.selectors.specificity.max} white />
                    </div>
                    <div className="basis-1/4 bg-black rounded-md p-8 grid grid-cols-2">
                        <Box title="Average" value={(stats.stats.selectors.specificity.average).toFixed(0)} white />
                    </div>
                </div>
                <LineGraph {...specificityChart} />
            </Container>

            {/* Declarations */}
            <Container title={localize('sections.titles.declaration')}>
                <div className="bg-black rounded-md p-8 grid grid-cols-5">
                    <Box title="Total" value={sepNumber(data.declarations.total)} white />
                    <Box title="Unique" value={sepNumber(data.declarations.totalUnique)} white />
                    <Box title="U/T Ratio" value={percent(data.declarations.totalUnique, data.declarations.total)} white />
                    <Box title="!important Usage" value={sepNumber(data.declarations.importants.total)} white />
                    <Box title="!important Ratio" value={percent(data.declarations.importants.total, data.declarations.total)} white />
                </div>
            </Container>

            {/* Properties & Values */}
            <Container title={localize('sections.titles.pv')}>
                {Object.keys(sortKeys(stats.stats.declarations.properties)).map((k: any) => {
                    return <Property key={k} prop={stats.stats.declarations.properties[k]} title={k} />;
                })}
                <Property prop={stats.stats.mediaQueries.values} title={localize('sections.titles.mq') as string} />
            </Container>

            {/* Units */}
            <Container title={localize('sections.titles.unit')} has_section>
                <h3 className="text-xl font-bold mb-6">Unique Units</h3>
                {sortValues(data.values.units.unique).map((key: string[]) => {
                    return <ValueBox key={key[0]} name={key[0]} value={key[1]} total={data.values.units.total} />;
                })}

                <h3 className="text-xl font-bold mt-12 mb-6">Units Per Property</h3>
                {Object.keys(sortKeys(data.values.units.itemsPerContext)).map((k: any) => {
                    return <PropertyUnit key={k} prop={data.values.units.itemsPerContext[k]} title={k} />;
                })}
            </Container>

            {/* Issues */}
            <Container title={localize('sections.titles.issue')} has_section>
                <Alert is_warning>
                    <Markdown content={issues} />
                </Alert>
            </Container>

            {/* Suggestions */}
            <Container title={localize('sections.titles.suggestion')} has_section>
                <Alert>
                    <Markdown content={suggestions} />
                </Alert>
            </Container>
        </div>
    );
};

export default Stats;
