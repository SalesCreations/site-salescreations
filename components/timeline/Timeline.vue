<template>
  <div class="timeline">
    <div class="timeline-item" date-is="2009">
      <h4 class="text-xl font-black">Hello, 'Im a single div responsive timeline without mediaQueries!</h4>
      <p class="text-gray-700">
        I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best
        placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they
        really so different? I think the only card she has is the Lorem card.
      </p>
    </div>

    <div class="timeline-item" date-is="2009">
      <h4 class="text-xl font-black">Oeehhh, that's awesome.. Me too!</h4>
      <p class="text-gray-700">
        I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best
        placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they
        really so different? I think the only card she has is the Lorem card.
      </p>
    </div>

    <div class="timeline-item">
      <h4 class="text-xl font-black">Oeehhh, that's awesome.. Me too!</h4>
      <p class="text-gray-700">
        I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best
        placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they
        really so different? I think the only card she has is the Lorem card.
      </p>
    </div>

    <div class="timeline-item" date-is="2009">
      <h4 class="text-xl font-black">I'm ::last-child so my border fades ^__^</h4>
      <p class="text-gray-700">
        I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best
        placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they
        really so different? I think the only card she has is the Lorem card.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
}
</script>

<style>
.timeline-item {
  padding: 3em 2em 2em;
  position: relative;
  border-left: 2px solid #b6b6b6;
}
.timeline-item p {
  font-size: 1rem;
}
.timeline-item::before {
  content: attr(date-is);
  position: absolute;
  left: 2em;
  top: 0.8em;
  display: block;
  color: #b6b6b6;
}
.timeline-item::after {
  width: 16px;
  height: 16px;
  display: block;
  top: 1em;
  position: absolute;
  left: -9px;
  border-radius: 10px;
  content: '';
  background: #b6b6b6;
}
.timeline-item:last-child {
  border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0)) 1 100%;
}
</style>
