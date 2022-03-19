<template>
  <div>
    <div class="flex justify-between items-center">
      <nav
        class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <a
          href="#"
          class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          @click.prevent="prev()"
          :class="{
            'cursor-not-allowed bg-gray-200 hover:bg-gray-300': isFirstPage,
          }"
        >
          <span class="sr-only">Previous</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          aria-current="page"
          class="bg-white border border-gray-300 text-gray-500 relative inline-flex items-center px-4 py-2 text-sm font-medium"
          @click.prevent="changePage(1)"
          v-if="hasFirst"
          >1</a
        >
        <span
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
          v-if="hasFirst"
          >...</span
        >
        <a
          href="#"
          aria-current="page"
          v-for="(page, index) in pages"
          :key="index"
          class="bg-white border border-gray-300 text-gray-500 relative inline-flex items-center px-4 py-2 text-sm font-medium"
          :class="{
            [`z-10 bg-indigo-50 !border-indigo-500 !text-indigo-500`]:
              paginationFields.page == page,
          }"
          @click.prevent="changePage(page)"
          >{{ page }}</a
        >
        <span
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
          v-if="hasLast"
          >...</span
        >
        <a
          href="#"
          aria-current="page"
          class="bg-white border border-gray-300 text-gray-500 relative inline-flex items-center px-4 py-2 text-sm font-medium"
          v-if="hasLast"
          @click.prevent="changePage(paginationFields.totalPages)"
          >{{ paginationFields.totalPages }}</a
        >
        <a
          href="#"
          class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          @click.prevent="next()"
          :class="{
            'cursor-not-allowed bg-gray-200 hover:bg-gray-300': isLastPage,
          }"
        >
          <span class="sr-only">Next</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>
      <div class="order-first">
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ paginationFrom }}</span>
          to
          <span class="font-medium">{{ paginationTo }}</span>
          of
          <span class="font-medium">{{ paginationFields.totalDocs }}</span>
          results
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paginationFields: Object,
    pageRange: {
      type: Number,
      default: 2,
    },
  },

  emits: ["changePage"],

  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },

    next() {
      if (this.paginationFields.hasNextPage) {
        this.changePage(this.paginationFields.nextPage);
      }
    },

    prev() {
      if (this.paginationFields.hasPrevPage) {
        this.changePage(this.paginationFields.prevPage);
      }
    },
  },

  computed: {
    paginationFrom() {
      return (this.paginationFields.page - 1) * this.paginationFields.limit + 1;
    },

    paginationTo() {
      let end = this.paginationFields.page * this.paginationFields.limit;

      return this.paginationFields.totalDocs < end
        ? this.paginationFields.totalDocs
        : end;
    },

    isFirstPage() {
      return this.paginationFields.page === 1;
    },

    isLastPage() {
      return this.paginationFields.page === this.paginationFields.totalPages;
    },

    rangeStart() {
      var start = this.paginationFields.page - this.pageRange;
      return start > 0 ? start : 1;
    },

    rangeEnd() {
      var end = this.paginationFields.page + this.pageRange;
      return end < this.paginationFields.totalPages
        ? end
        : this.paginationFields.totalPages;
    },

    hasFirst() {
      return this.rangeStart !== 1;
    },

    hasLast() {
      return this.rangeEnd < this.paginationFields.totalPages;
    },

    pages() {
      let pages = [];

      for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }

      return pages;
    },
  },
};
</script>
